import { useState } from 'react'

export default function () {
  const [info, setInfo] = useState<API.IUser>()

  const login = (name: string, password: string) => {
    setInfo({
      id: 2,
      name,
      password
    })
  }
  const logout = () => {
    setInfo({} as API.IUser)
  }

  return {
    info,
    login,
    logout
  }
}
