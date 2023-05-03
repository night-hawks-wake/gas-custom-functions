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