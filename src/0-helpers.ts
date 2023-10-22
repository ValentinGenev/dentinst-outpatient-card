function formatDate(timestamp: Date) {
  const year = timestamp.getFullYear()
  const month = ("0" + (timestamp.getMonth() + 1)).slice(-2) // Months are zero-based
  const day = ("0" + timestamp.getDate()).slice(-2)
  const hours = ("0" + timestamp.getHours()).slice(-2)
  const minutes = ("0" + timestamp.getMinutes()).slice(-2)
  const seconds = ("0" + timestamp.getSeconds()).slice(-2)

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * @param value '1' | null
 * @returns boolean
 */
function parseCheckboxValueToBoolean(value: string) {
  return Boolean(Number(value))
}

function loadTemplate(name: string) {
  return HtmlService.createHtmlOutputFromFile(name).getContent()
}

function findRowsByValue(sheet: GoogleAppsScript.Spreadsheet.Sheet, value: any) {
  const textFinder = sheet.createTextFinder(value)
  const matches = textFinder.findAll()

  const matchingRows = [];
  for (let i = 0; i < matches.length; i++) {
    const row = matches[i].getRow()
    const range = sheet.getRange(row, 1, 1, sheet.getLastColumn())
    const values = range.getValues()

    matchingRows.push(values[0])
  }

  return matchingRows
}
