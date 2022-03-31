

import Layout from '../Components/Layout'
import '../styles/globals.css'
import authContextProvider from '../context/authContext'


function MyApp({ Component, pageProps }) {
  return (
    <authContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </authContextProvider>

  )
}

export default MyApp
