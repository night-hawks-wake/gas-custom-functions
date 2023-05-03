// filter에 넣어 사용하는 conditions

const notNull = (value) => {
  return value != null
}
  
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}