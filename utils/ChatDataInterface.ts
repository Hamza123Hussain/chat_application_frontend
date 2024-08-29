export interface CHATDAT {
  LastMessage: string
  UpdatedAt: string
  chatID: string
  receiverId: string
  user: userdata
}
interface userdata {
  Blocked: any[]
  Email: string
  FileURL: string
  Name: string
  id: string
}
