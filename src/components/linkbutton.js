import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'semantic-ui-react'

const getClasses = opts => {
  let names = ['ui', 'button', 'icon']

  for (var v in opts) {
    names.push(opts[v] === true ? v : opts[v])
  }
  return names.join(' ')
}

const isInternal = link => {
  return link.indexOf('http') === -1
}

const LinkButton = ({ to, label, icon, ...buttonopts }) => {
  const styles = getClasses(buttonopts)

  return isInternal(to) ? (
    <Link to={to} className={styles} aria-label={label}>
      <Icon name={icon} />
    </Link>
  ) : (
    <a href={to} className={styles} aria-label={label}>
      <Icon name={icon} />
    </a>
  )
}

export default LinkButton
