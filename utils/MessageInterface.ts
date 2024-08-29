export interface Message {
  senderId: string
  text: string
  timestamp: FirestoreTimestamp
}
type FirestoreTimestamp = {
  seconds: number
  nanoseconds: number
}
