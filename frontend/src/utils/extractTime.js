function padStartZero(number) {
  return number.toString().padStart(2, "0");
}
export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padStartZero(date.getHours());
  const minutes = padStartZero(date.getMinutes());
  return `${hours}:${minutes}`;
}
