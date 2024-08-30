export interface Message {
  senderId: string
  text: string
  timestamp: FirestoreTimestamp
  MessageImage: string | null
  UserProfileImage: string | null
  Name: string
}
type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}
