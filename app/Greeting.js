import React, { useContext } from 'react'
import LocaleContext from './LocaleContext'
import { ENGLISH_LOCALE } from './Constants'

const getGreetingFor = locale => locale === ENGLISH_LOCALE
  ? 'Welcome!'
  : 'Bienvenue!'

const Greeting = (props, context) => {
  const locale = useContext(LocaleContext)

  return (
    <div>
      <h1>{getGreetingFor(locale)}</h1>
    </div>
  )
}

export default Greeting
