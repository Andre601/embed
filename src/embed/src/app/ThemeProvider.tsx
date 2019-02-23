import { Theme as ThemeContext } from '@lib/emotion'
import Color from 'color'
import { ThemeProvider as Provider } from 'emotion-theming'
import * as React from 'react'
import * as _ from 'lodash'
import { GlobalStyles } from './elements'
import GET_THEME from './Theme.graphql'

import { Theme_guild_theme } from '@generated'
import * as Constants from '@constants'
import { useQuery } from 'react-apollo-hooks'
import { useRouter } from '@hooks'

export const ThemeProvider = ({ children }) => {
  const { guild } = useRouter()
  const { data } = useQuery(GET_THEME, { variables: { guild } })

  let theme: Theme_guild_theme = {
    __typename: 'Theme',
    colors: {
      __typename: 'ThemeColors',
      primary: Constants.THEME_COLOR_PRIMARY,
      accent: Constants.THEME_COLOR_ACCENT,
      background: Constants.THEME_BACKGROUND
    },
    css: ``
  }

  if (data.guild && data.guild.theme) _.merge(theme, data.guild.theme)

  const themeContext: ThemeContext = {
    ...theme,
    colors: {
      ...theme.colors,
      _primary: Color(theme.colors.primary),
      _background: Color(theme.colors.background),
      _accent: Color(theme.colors.accent)
    },
    url: {} // TODO: Fix
  }

  GlobalStyles.inject(themeContext)

  return <Provider theme={themeContext}>{children}</Provider>
}
