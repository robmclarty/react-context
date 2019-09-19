import React, { useContext } from 'react'
import LocaleContext from './LocaleContext'
import { ENGLISH_LOCALE } from './Constants'

const ToggleLocale = ({ changeLocale }) => {
  const locale = useContext(LocaleContext)

  return (
    <button onClick={changeLocale}>{
      locale === ENGLISH_LOCALE
        ? 'Français'
        : 'English'
    }</button>
  )
}

export default ToggleLocale
