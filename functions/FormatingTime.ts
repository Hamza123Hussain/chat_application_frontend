function formatTimestampToAmPm(timestamp: FirestoreTimestamp): string {
  // Convert Firestore timestamp to milliseconds
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  )

  // Extract hours, minutes, and AM/PM period
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const amPm = hours >= 12 ? 'PM' : 'AM'

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12 // Adjust hours for 12-hour format

  // Format minutes to always be two digits
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

  // Return the formatted time
  return `${hours}:${formattedMinutes} ${amPm}`
}
