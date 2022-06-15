import React, { FC } from "react"
import { useHistory } from 'umi'

const User: FC = () => {
  const history = useHistory()

  return (
    <div>
      <button onClick={() => history.push('/')}>点击跳转</button>
      <span>111</span>
    </div>
  )
}

export default User
