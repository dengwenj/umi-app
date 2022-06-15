import React, { FC, ReactNode } from 'react'

interface IPorps {
  children?: ReactNode
}
const Layouts: FC<IPorps> = ({ children }) => {
  return (
    // 用 children 占个位
    <div>{children}</div>
  )
}

export default Layouts
