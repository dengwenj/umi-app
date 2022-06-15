declare namespace API {
  interface IRole {
    isAdmin: boolean
  }
  interface IUser {
    id: number
    name: string
    password: string
    role: IRole
  }
}
