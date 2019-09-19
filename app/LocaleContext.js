import React from 'react'

const DEFAULT_LOCALE = 'en'

const LocaleContext = React.createContext(DEFAULT_LOCALE)

export default LocaleContext

// class LocaleProvider extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.changeLocale = () => {
//       this.setState(state => {
//         const newLocale = state.locale === 'en' ? 'fr' : 'en'
//         return { locale: newLocale }
//       })
//     }
//
//     this.state = {
//       locale: 'en',
//       changeLocale: this.changeLocale
//     }
//   }
//
//   render() {
//     return (
//       <LocaleContext.Provider value={this.state}>
//         {this.props.children}
//       </LocaleContext.Provider>
//     )
//   }
// }
//
// export default LocaleProvider
