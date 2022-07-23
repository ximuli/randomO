// 随机生成整数
// 生成[0,n)范围内得随机整数，不包括n
export const generateRandomNum = (n: number) => {
  return Math.floor(Math.random() * n)
}

export const isMobile = ():boolean => {
  return 'ontouchstart' in document.documentElement
}