export function formatDate_HH_MM(date) {
  return `${date.getFullYear()}-${date.getMonth()?.toString()?.padStart(2, "0")}`
}