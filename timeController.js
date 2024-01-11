// 시간 및 날짜 조작 함수 모음

/* changeTimeK : date 객체의 시간을 한국 시간으로 변경하는 함수
- attributes - 
dateObj : Date 객체
*/
const changeTimeK = (dateObj) => {
  const utc = dateObj.getTime() + (dateObj.getTimezoneOffset() * 60 * 1000)
  const krTimeDiff = 9 * 60 * 60 * 1000
  const nowKr = new Date((utc + krTimeDiff))

  return nowKr
}

/* miliSecondTime : 현재 시간을 milisecond 단위의 string으로 변경하는 함수
*/
const miliSecondTime = () => {
  const now = new Date()
  const timestamp = now.getTime()
  const miliSecond = timestamp % 1000
  const dateString = now.toString()

  const modedDateString = `${dateString.substring(0, 24)}:${miliSecond}:${dateString.substring(25, dateString.length)}`

  return modedDateString
}

/* getQuarter : 분기를 계산하여 반환하는 함수
- attributes -
dateObj : 대상 Date 객체
*/
const getQuarter = (dateObj) => {
  const targetMonth = dateObj.getMonth() + 1
  if (targetMonth < 4) {
    return 1
  } else if (targetMonth < 7) {
    return 2
  } else if (targetMonth < 10) {
    return 3
  } else {
    return 4
  }
}