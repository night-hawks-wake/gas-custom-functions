// 스프레드시트상에 현재 써있는 값들을 읽어오는 기능 모음

import { alpha } from './statics';

/* getOneColumnValues : 한 열의 데이터만 읽어오는 함수
- attributes -
sheetObj : sheet 객체 (object)
columns : 헤더 행 배열 (array)
columnName : 읽어 올 헤더 열의 이름 (string)
dataStartRow : 데이터가 시작하는 행 (number)
flat : 평면화, 기본값 = true (boolean)
*/
const getOneColumnValues = (sheetObj, columns, columnName, dataStartRow, dataEndRow, flat = true) => {
  const alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const returnValue = sheetObj.getRange(alpha[columns.indexOf(columnName)] + dataStartRow + ":" + alpha[columns.indexOf(columnName)] + dataEndRow).getValues()
  if (flat === true) {
    return returnValue.flat()
  } else {
    return returnValue
  }
}

/* getColumns : 헤더행을 배열로 읽어오는 함수
- attributes - 
sheetObj : sheet 객체 (object)
columnRowNum : 헤더의 행 번호 (number)
startAlpha : 첫 열 알파벳 (string)
endAlpha : 마지막 열 알파벳 (string)
*/
const getColumns = (sheetObj, columnRowNum, startAlpha = "A", endAlpha) => {
    return sheetObj.getRange(startAlpha + columnRowNum + ":" + endAlpha + columnRowNum).getValues().flat()
}

/* clearSheet : 특정 시트의 데이터 전체를 삭제
- attributes - 
sheetObj : sheet 객체, 삭제할 특정 시트 (object)
deleteColumns : boolean, 첫 행까지 삭제할지를 결정
*/
const clearSheet = (sheetObj, deleteColumns = false) => {
  const lastRow = sheetObj.getLastRow()

  if (deleteColumns) {
    sheetObj.clear()
  } else if (lastRow > 1) {
    const lastColumn = sheetObj.getLastColumn()
    const clearRangeStr = `A2:${alpha[lastColumn - 1]}${lastRow}`

    sheetObj.getRange(clearRangeStr).clear()
  }
}