export function formatDate (date) {
  const postDate = new Date(date)
  const year = postDate.getFullYear()
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const monthIndex = postDate.getMonth()
  const dt = postDate.getDate()
  return `${dt} ${months[monthIndex]} ${year} года`
}

export default formatDate
