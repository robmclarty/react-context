import React, { useState } from 'react'
import LocaleContext from './LocaleContext'
import Greeting from './Greeting'
import Description from './Description'
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
      <Description />
      <ToggleLocale changeLocale={toggleLocale} />
    </LocaleContext.Provider>
  )
}

export default App
