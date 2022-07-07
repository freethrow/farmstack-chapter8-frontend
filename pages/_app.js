import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col container p-5">
      <Header />
      <div className="flex-1 "><Component {...pageProps} /></div>      
      <Footer />
  </div>
  )
}
export default MyApp
