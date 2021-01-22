export function generateOptions (options = {}, otherOptions = '') {
  let str = otherOptions
  if (options.with) {
    options.with.forEach((param, i) => {
      const separator = str.length ? '&' : '?'
      str += `${i < 1 ? separator : '&'}with[]=${param}`
    })
  }
  if (options.filters) {
    Object.keys(options.filters).forEach((key, i) => {
      const separator = str.length ? '&' : '?'
      str += `${i < 1 ? separator : '&'}filters[${key}]=${options.filters[key]}`
    })
  }
  if (options.order) {
    Object.keys(options.order).forEach((key, i) => {
      const separator = str.length ? '&' : '?'
      str += `${i < 1 ? separator : '&'}order[${key}]=${options.order[key]}`
    })
  }
  return str
}

export default generateOptions
