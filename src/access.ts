// 其中的 initialState  来自于全局初始化数据，可以基于这些数据来初始化用户权限
export default function (initialState: API.IUser) {
  console.log(initialState)
  return {
    isAdmin: initialState.role.isAdmin
  }
}
