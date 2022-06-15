/**
 * umi 插件
 * @returns
 */
export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 1,
    name: 'dwj',
    password: '123123',
    role: {
      isAdmin: true
    }
  })
}
