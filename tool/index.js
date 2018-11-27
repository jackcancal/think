// 格式化时间函数
export const formatTime = function() {
  function p(s) {
    return s < 10 ? '0' + s : s
  } // 补零函数
  let time = new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  return (year + '-' + p(month) + '-' + p(day)) // 格式化时间
}
// 1-9转 一-九
export const numToWord = function(n) {
  const str = n.toString()
  if (!/^[1-9]\d*$/.test(str)) return '非法数字'
  switch (str) {
    case '1':
      return '一'
    case '2':
      return '二'
    case '3':
      return '三'
    case '4':
      return '四'
    case '5':
      return '五'
    case '6':
      return '六'
    case '7':
      return '七'
    case '8':
      return '八'
    case '9':
      return '九'
  }
}
// 转二维数组
export const arrTo2 = function (arr, length) {
  let smallArr = []
  let bigArr = []
  for (let i = 0; i < arr.length; i++) {
    smallArr.push(arr[i])
    if (smallArr.length === length || i === arr.length - 1) {
      bigArr.push(smallArr)
      smallArr = []
    }
  }
  return bigArr
}
