export interface Message {
  senderId: string
  text: string
  timestamp: FirestoreTimestamp
  MessageImage: string | null
}
type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}
