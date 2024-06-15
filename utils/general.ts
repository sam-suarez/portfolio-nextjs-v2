export const getResume = () => {
  window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
}

export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' })
  return monthYear
}
