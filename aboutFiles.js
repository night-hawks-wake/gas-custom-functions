// 스프레드시트 파일 자체 또는 드라이브 파일 조작 기능 모음

/* getSheetNameArr : 특정 스프레드시트 파일의 시트 이름 배열을 리턴하는 함수
- attributes - 
ssObj : spreadsheet 객체
*/
const getSheetNameArr = (ssObj) => {
  let sheets = ssObj.getSheets()
  let returnArr = []
  for (sheet of sheets) {
    returnArr.push(sheet.getSheetName())
  }
  return returnArr
}