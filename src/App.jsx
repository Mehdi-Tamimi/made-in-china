
import './App.css'
import MobileButtomHeader from './components/mobileButtomHeader'
import TabButtomHeader from './components/tabButtomHeader'
import Search from './components/search'
import SideMenu from './components/sideMenu'
import SiteLogo from './components/siteLogo'
import AllCategories from './components/allCategories'
import DesktopButtomHeader from './components/desktopButtomHeader'
import { useEffect, useRef, useState } from 'react'
import ButtomHeader from './components/buttomHeader'
import HeaderNavbar from './components/headerNavbar'

function App() {

  const [sticky, setSticky] = useState(false)
  const headerRef = useRef(null)
  
  const handleScroll = () => {
    const scroll_y = window.scrollY
    if (headerRef.current.offsetHeight < scroll_y)  {
      setSticky(true)
      
    }
    else {
      setSticky(false)
    }
    
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)

    return () => {
      removeEventListener('scroll',handleScroll)
    }
  },[])
  
  
  return (
    <div className='container'>
        <header ref={headerRef} className='header'>
          <div className={`header-top ${sticky? 'sticky':''}`}>
            <SideMenu/>
            <SiteLogo/>
            <div className='categories-tab'>
              <AllCategories/>
            </div>
            <Search sticky={sticky}/>
            <HeaderNavbar sticky={sticky}/>
            <div className='usericon-container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"/></svg>
            </div>
          </div>
          <ButtomHeader/>
        </header>
        <div className='body1'>

        </div>
    </div>
  )
}

export default App
