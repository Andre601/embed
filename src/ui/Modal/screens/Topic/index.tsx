import * as React from 'react'
import Markdown from '../../../shared/markdown/render'

import { Box, Close } from '../../../Modal'
import { Content } from './elements'
import { observer } from 'mobx-react'
import { store } from '../../../../models'

const Topic = observer(() => {
  return (
    <Box>
      <Close onClick={store.modal.close} />
      <Content>
        <Markdown>{store.modal.data}</Markdown>
      </Content>
    </Box>
  )
})

export default Topic
