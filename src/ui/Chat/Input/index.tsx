import * as React from "react";

import { Root, Textarea, NoPerms } from "./elements";
import Suggestions from "./Suggestions";
import Channels from "./suggestions/channels";
import Commands from "./suggestions/commands";
import Emojis from "./suggestions/emojis";
import Mentions from "./suggestions/mentions";
import extractQuery from "./utils/extractQuery";
import injectValue from "./utils/injectValue";
import { ChatProps } from "../Chat";
import { inject, observer } from "mobx-react";
import { generalStore, authStore } from "@store";
import { login } from "@views/Messages/Header";
import { Locale } from "@lib/Locale";

interface Props extends ChatProps {
  innerRef?: (textarea: HTMLTextAreaElement) => void,
  innerProps?: React.InputHTMLAttributes<HTMLTextAreaElement>,
  onChange?: Function,
  onKeyPress?: Function,
  onSubmit?: Function,
  channel?: any
}

export const handlers = [Emojis, Mentions, Commands, Channels];

@observer
class MagicTextarea extends React.Component<Props> {
  initialState = {
    leftIndex: -1,
    caretPosition: -1,

    showSuggestions: false,
    handler: null,

    query: null
  };

  state = this.initialState;
  resetState = () => this.setState(this.initialState);

  getValue = () => this.textarea.value;
  textarea: HTMLTextAreaElement;
  suggestions: Suggestions;

  onChange(value) {
    const { onChange } = this.props;

    onChange?.(value);
  }

  render() {
    const user = authStore.user;

    if (!(user && this.props.channel.canSend)) return (
      <NoPerms
        onClick={!authStore.user && (generalStore.settings?.guestMode ? (() => generalStore.toggleMenu(true)).bind({ props: { GeneralStore: generalStore }}) : login.bind({ props: { AuthStore: authStore }}))}
      >
        { !user ? Locale.translate('frontend.input.login') : Locale.translate('frontend.input.noperms') }
      </NoPerms>
    );

    if (this.props.thread && (generalStore.activeThread?.locked || generalStore.activeThread?.archivedAt)) return (
      <NoPerms>
        { generalStore.activeThread.locked ? Locale.translate('frontend.input.threadlocked') : Locale.translate('frontend.input.threadarchived') }
      </NoPerms>
    );

    return (
      <Root>
        <Textarea
          {...this.props.innerProps}
          innerRef={ref => {
            const { innerRef } = this.props;

            this.textarea = ref;
            innerRef?.(ref);
          }}
          onChange={event => this.onChange(event.target.value)}
          onClick={this.resetState}
          onKeyDown={event => {
            switch (event.key) {
              case "ArrowUp":
              case "ArrowDown":
                if (!this.suggestions) return;

                this.suggestions.traverseSuggestions(event.key === "ArrowDown");
                event.preventDefault();
                return;
              case "Tab":
                if (!this.suggestions) return;

                this.suggestions.selectSuggestion();
                event.preventDefault();
                return;
              case "Enter":
                if (this.state.showSuggestions) {
                  this.suggestions?.selectSuggestion();
                  event.preventDefault();
                  return;
                }

                if (!event.shiftKey || window.innerWidth < 768) {
                  const { onSubmit, onChange } = this.props;

                  // Submit
                  onSubmit?.(this.textarea.value);
                  onChange?.("");
                  event.preventDefault();
                }

                return;
              case "Escape":
                this.resetState();
                break;
              default:
                if (this.props.onKeyPress) this.props.onKeyPress(event);
                break;
            }
          }}
          onInput={() => {
            const { query, ...rest } = extractQuery(this.textarea);
            this.setState({ ...rest, showSuggestions: false });

            // Find a parser for the selected query
            for (const handler of handlers) {
              const parsedQuery = handler.extract(query, this.textarea);

              if (typeof parsedQuery === "string") {
                this.setState({
                  showSuggestions: true,
                  query: parsedQuery,
                  handler
                });
                break;
              }
            }
          }}
        />

        {this.state.showSuggestions && (
          <Suggestions
            ref={ref => (this.suggestions = ref)}
            query={this.state.query}
            handler={this.state.handler}
            onSelect={suggestion => {
              const { handler, leftIndex, caretPosition } = this.state;

              if (suggestion) {
                const text = injectValue({
                  input: this.textarea,
                  value: handler.toString(suggestion),
                  leftIndex,
                  caretPosition
                });

                this.onChange(text);
              }

              this.resetState();
            }}
          />
        )}
      </Root>
    );
  }
}

export default MagicTextarea;
