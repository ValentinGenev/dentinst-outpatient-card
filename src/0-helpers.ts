function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear()
  const month = ("0" + (timestamp.getMonth() + 1)).slice(-2) // Months are zero-based
  const day = ("0" + timestamp.getDate()).slice(-2)
  const hours = ("0" + timestamp.getHours()).slice(-2)
  const minutes = ("0" + timestamp.getMinutes()).slice(-2)
  const seconds = ("0" + timestamp.getSeconds()).slice(-2)

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function loadTemplate(name: string) {
  return HtmlService.createHtmlOutputFromFile(name).getContent()
}
