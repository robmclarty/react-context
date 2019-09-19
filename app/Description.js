import React from 'react'
import LocaleContext from './LocaleContext'
import { ENGLISH_LOCALE } from './Constants'

const getDescriptionFor = locale => locale === ENGLISH_LOCALE
  ? 'This is React, with context!'
  : 'C\'est React, avec le contexte!'

// An classical context consumer example.
class Description extends React.Component {
  render() {
    let locale = this.context

    return (
      <p>{getDescriptionFor(locale)}</p>
    )
  }
}

Description.contextType = LocaleContext

export default Description
