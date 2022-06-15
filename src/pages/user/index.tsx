import React, { FC } from "react"
import { useHistory, useModel, useAccess, Access } from 'umi'

const User: FC = () => {
  const history = useHistory()

  const { initialState } = useModel('@@initialState')
  const { info, login, logout } = useModel('user')
  const access = useAccess()

  return (
    <div>
      <button onClick={() => history.push('/')}>点击跳转</button>
      <span>111</span>
      <br />
      <span>{initialState?.id}</span>
      <span>{initialState?.name}</span>
      <span>{initialState?.password}</span>
      <br />
      <span>{info?.name}</span>
      <button onClick={() => login('dengwej', '123456s')}>登录</button>
      <button onClick={() => logout()}>登出</button>
      <Access accessible={access.isAAA} fallback={'哈哈哈'}>jj</Access>
    </div>
  )
}

export default User
