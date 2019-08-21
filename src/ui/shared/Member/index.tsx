import { cx } from 'emotion'
import { Route } from 'react-router-dom'
import * as React from 'react'
import { Query } from 'react-apollo'

import { MemberInfo } from '../../../__generated__'
import MemberLink from './link'
import { loader } from 'graphql.macro';

// TODO: FIx
interface Props {
  id: string
  className?: string
  children: (member: any /*MemberInfo_server_member*/) => any
}

const Member = ({ id: member, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
      <Query /*<MemberInfo, MemberInfoVariables>*/
        query={loader('./MemberInfo.graphql')}
        variables={{ server, member }}
      >
        {({ error, loading, data }) => {
          const success = !error && !loading && data && data.server
          const name = success ? `@${data.server.member.name}` : `<@${member}>`

          return (
            <MemberLink id={member} className={cx('member-link', className)}>
              {children({
                __typename: 'Member',
                name,
                id: member
              })}
            </MemberLink>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Member

export { default as MemberLink } from './link'
