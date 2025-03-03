/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_TextChannel_messages_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Messages_channel_TextChannel_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Messages_channel_TextChannel_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Messages_channel_TextChannel_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Messages_channel_TextChannel_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Messages_channel_TextChannel_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Messages_channel_TextChannel_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_TextChannel_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_TextChannel_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_TextChannel_messages_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_TextChannel_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_TextChannel_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Messages_channel_TextChannel_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_TextChannel_messages_embeds_author | null;
  fields: Messages_channel_TextChannel_messages_embeds_fields[] | null;
  image: Messages_channel_TextChannel_messages_embeds_image | null;
  provider: Messages_channel_TextChannel_messages_embeds_provider | null;
  footer: Messages_channel_TextChannel_messages_embeds_footer | null;
  thumbnail: Messages_channel_TextChannel_messages_embeds_thumbnail | null;
  video: Messages_channel_TextChannel_messages_embeds_video | null;
}

export interface Messages_channel_TextChannel_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Messages_channel_TextChannel_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Messages_channel_TextChannel_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Messages_channel_TextChannel_messages_interaction_user;
}

export interface Messages_channel_TextChannel_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_TextChannel_messages_referencedMessage_embeds_author | null;
  fields: Messages_channel_TextChannel_messages_referencedMessage_embeds_fields[] | null;
  image: Messages_channel_TextChannel_messages_referencedMessage_embeds_image | null;
  provider: Messages_channel_TextChannel_messages_referencedMessage_embeds_provider | null;
  footer: Messages_channel_TextChannel_messages_referencedMessage_embeds_footer | null;
  thumbnail: Messages_channel_TextChannel_messages_referencedMessage_embeds_thumbnail | null;
  video: Messages_channel_TextChannel_messages_referencedMessage_embeds_video | null;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Messages_channel_TextChannel_messages_referencedMessage_interaction_user;
}

export interface Messages_channel_TextChannel_messages_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Messages_channel_TextChannel_messages_referencedMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Messages_channel_TextChannel_messages_referencedMessage_author;
  attachments: Messages_channel_TextChannel_messages_referencedMessage_attachments[];
  stickers: Messages_channel_TextChannel_messages_referencedMessage_stickers[];
  reactions: Messages_channel_TextChannel_messages_referencedMessage_reactions[] | null;
  messageReference: Messages_channel_TextChannel_messages_referencedMessage_messageReference | null;
  embeds: Messages_channel_TextChannel_messages_referencedMessage_embeds[];
  mentions: Messages_channel_TextChannel_messages_referencedMessage_mentions[];
  interaction: Messages_channel_TextChannel_messages_referencedMessage_interaction | null;
  thread: Messages_channel_TextChannel_messages_referencedMessage_thread | null;
}

export interface Messages_channel_TextChannel_messages {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Messages_channel_TextChannel_messages_author;
  attachments: Messages_channel_TextChannel_messages_attachments[];
  stickers: Messages_channel_TextChannel_messages_stickers[];
  reactions: Messages_channel_TextChannel_messages_reactions[] | null;
  messageReference: Messages_channel_TextChannel_messages_messageReference | null;
  embeds: Messages_channel_TextChannel_messages_embeds[];
  mentions: Messages_channel_TextChannel_messages_mentions[];
  interaction: Messages_channel_TextChannel_messages_interaction | null;
  thread: Messages_channel_TextChannel_messages_thread | null;
  referencedMessage: Messages_channel_TextChannel_messages_referencedMessage | null;
}

export interface Messages_channel_TextChannel {
  __typename: "TextChannel";
  id: string;
  messages: Messages_channel_TextChannel_messages[];
}

export interface Messages_channel_AnnouncementChannel_messages_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Messages_channel_AnnouncementChannel_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Messages_channel_AnnouncementChannel_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Messages_channel_AnnouncementChannel_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_AnnouncementChannel_messages_embeds_author | null;
  fields: Messages_channel_AnnouncementChannel_messages_embeds_fields[] | null;
  image: Messages_channel_AnnouncementChannel_messages_embeds_image | null;
  provider: Messages_channel_AnnouncementChannel_messages_embeds_provider | null;
  footer: Messages_channel_AnnouncementChannel_messages_embeds_footer | null;
  thumbnail: Messages_channel_AnnouncementChannel_messages_embeds_thumbnail | null;
  video: Messages_channel_AnnouncementChannel_messages_embeds_video | null;
}

export interface Messages_channel_AnnouncementChannel_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Messages_channel_AnnouncementChannel_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Messages_channel_AnnouncementChannel_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Messages_channel_AnnouncementChannel_messages_interaction_user;
}

export interface Messages_channel_AnnouncementChannel_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_author | null;
  fields: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_fields[] | null;
  image: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_image | null;
  provider: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_provider | null;
  footer: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_footer | null;
  thumbnail: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_thumbnail | null;
  video: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds_video | null;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Messages_channel_AnnouncementChannel_messages_referencedMessage_interaction_user;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Messages_channel_AnnouncementChannel_messages_referencedMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Messages_channel_AnnouncementChannel_messages_referencedMessage_author;
  attachments: Messages_channel_AnnouncementChannel_messages_referencedMessage_attachments[];
  stickers: Messages_channel_AnnouncementChannel_messages_referencedMessage_stickers[];
  reactions: Messages_channel_AnnouncementChannel_messages_referencedMessage_reactions[] | null;
  messageReference: Messages_channel_AnnouncementChannel_messages_referencedMessage_messageReference | null;
  embeds: Messages_channel_AnnouncementChannel_messages_referencedMessage_embeds[];
  mentions: Messages_channel_AnnouncementChannel_messages_referencedMessage_mentions[];
  interaction: Messages_channel_AnnouncementChannel_messages_referencedMessage_interaction | null;
  thread: Messages_channel_AnnouncementChannel_messages_referencedMessage_thread | null;
}

export interface Messages_channel_AnnouncementChannel_messages {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Messages_channel_AnnouncementChannel_messages_author;
  attachments: Messages_channel_AnnouncementChannel_messages_attachments[];
  stickers: Messages_channel_AnnouncementChannel_messages_stickers[];
  reactions: Messages_channel_AnnouncementChannel_messages_reactions[] | null;
  messageReference: Messages_channel_AnnouncementChannel_messages_messageReference | null;
  embeds: Messages_channel_AnnouncementChannel_messages_embeds[];
  mentions: Messages_channel_AnnouncementChannel_messages_mentions[];
  interaction: Messages_channel_AnnouncementChannel_messages_interaction | null;
  thread: Messages_channel_AnnouncementChannel_messages_thread | null;
  referencedMessage: Messages_channel_AnnouncementChannel_messages_referencedMessage | null;
}

export interface Messages_channel_AnnouncementChannel {
  __typename: "AnnouncementChannel";
  id: string;
  messages: Messages_channel_AnnouncementChannel_messages[];
}

export type Messages_channel = Messages_channel_TextChannel | Messages_channel_AnnouncementChannel;

export interface Messages {
  channel: Messages_channel;
}

export interface MessagesVariables {
  channel: string;
  thread?: string | null;
  around?: string | null;
  before?: string | null;
  after?: string | null;
  limit?: number | null;
}
