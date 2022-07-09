// 随机生成整数
// 生成[0,n)范围内得随机整数，不包括n
export const genarateRandomNum = (n: number) => {
  return Math.floor(Math.random() * n)
}