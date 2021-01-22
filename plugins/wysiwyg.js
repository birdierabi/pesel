export function generateDomFromJson (data) {
  const blocks = normalizeJson(data)
  if (typeof blocks === 'string') {
    return blocks
  }
  let result = ''
  blocks.forEach(block => {
    const el = _generateDomFromBlock(block)
    result += el
  })
  return result
}

export function normalizeJson (data = {}) {
  let json = data
  if (typeof data === 'string') {
    try {
      json = JSON.parse(data)
    } catch (e) {}
  }
  return json.blocks || json
}

function _make (tag = 'div', innerHTML = '', attrs = '') {
  return `<${tag} ${attrs}>${innerHTML}</${tag}>`
}

function _generateDomFromBlock (block) {
  switch (block.type) {
  case 'header':
    return _make(`h${block.data.level ? block.data.level : 2}`, block.data.text)

  case 'button': {
    let attrs = ''
    // удалить тег, если ссылка добавила с с тегом
    if (block.data.url.includes('>')) {
      const startIndex = block.data.url.indexOf('>') + 1
      const currentString = block.data.url.substring(startIndex)
      const lastIndex = currentString.indexOf('<')
      attrs += `href="${currentString.substring(0, lastIndex)}"`
    } else {
      attrs += `href="${block.data.url}"`
    }
    attrs += ' class="wysiwyg-button"'
    return _make('a', block.data.text, attrs)
  }

  case 'quote': {
    let quoteInner = ''
    quoteInner += _make('div', block.data.text)
    quoteInner += _make('cite', block.data.caption)

    return _make('blockquote', quoteInner)
  }

  case 'list': {
    let listInner = ''
    block.data.items.forEach(item => {
      listInner += _make('li', item)
    })
    return _make(block.data.style === 'ordered' ? 'ol' : 'ul', listInner)
  }

  case 'table': {
    let tableInner = ''
    block.data.content.forEach(row => {
      let rowInner = ''
      row.forEach(cell => {
        rowInner += _make('td', cell)
      })
      tableInner += _make('tr', rowInner)
    })
    return _make('table', tableInner)
  }

  case 'image': {
    let imageInner = ''
    imageInner += _make('figcaption', block.data.caption)
    imageInner += _make('img', '', `src="${block.data.url}" class="object"`)

    return _make('figure', imageInner)
  }

  case 'spoiler': {
    let spoilerInner = ''
    spoilerInner += _make('summary', block.data.summary)
    spoilerInner += _make('div', block.data.text)

    return _make('details', spoilerInner)
  }

  case 'seoText':
    return _make('seo-text', block.data.text)

  case 'delimiter':
    return _make('hr')

  case 'linking': {
    let linkingInner = ''
    block.data.items.forEach(item => {
      if (item.text && item.url) {
        const link = _make('a', item.text, `href="${item.url}"`)
        linkingInner += _make('div', link, 'class="linking-item"')
      }
    })
    return _make('div', linkingInner, 'class="linking"')
  }

  default:
    return _make('p', block.data.text)
  }
}

export default { generateDomFromJson, normalizeJson }
