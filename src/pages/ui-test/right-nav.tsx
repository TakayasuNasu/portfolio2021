import React, { useState } from 'react'
import type { FC } from 'react'
import RightNav from '../../components/organisms/nav/right'

const Page: FC = () => {
  const [isExpanded, setExpanded] = useState(true)
  return (
    <React.Fragment>
      <RightNav isExpanded={isExpanded} setExpanded={setExpanded} />
    </React.Fragment>
  )
}
export default Page
