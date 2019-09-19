import React, { useState } from 'react'
import LocaleContext from './LocaleContext'
import Greeting from './Greeting'
import ToggleLocale from './ToggleLocale'
import {
  ENGLISH_LOCALE,
  FRENCH_LOCALE,
  DEFAULT_LOCALE
} from './Constants'

const App = () => {
  const [locale, setLocale] = useState(DEFAULT_LOCALE)

  const toggleLocale = () => {
    locale === ENGLISH_LOCALE
      ? setLocale(FRENCH_LOCALE)
      : setLocale(ENGLISH_LOCALE)
  }

  return (
    <LocaleContext.Provider value={locale}>
      <Greeting />
      <ToggleLocale changeLocale={toggleLocale} />
    </LocaleContext.Provider>
  )
}

export default App
