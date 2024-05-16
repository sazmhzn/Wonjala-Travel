import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout