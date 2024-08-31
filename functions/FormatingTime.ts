// Convert Firestore timestamp to Date
export const timestampToDate = (timestamp: any) => {
  const seconds = timestamp.seconds
  return new Date(seconds * 1000) // Convert seconds to milliseconds
}

// Format Date object to 24-hour time
export const formatTime = (date: any) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
