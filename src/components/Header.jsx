import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { DesktopMenu } from './DesktopMenu'
import HeaderItem from './HeaderItem'
import CloseMenu from './Icons/CloseMenu'
import OpenMenu from './Icons/OpenMenu'
import { MobileMenu } from './MobileMenu'

const Header = ({title = "Dawshop"}) => {

    const navigate = useNavigate()
    const size = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () => {
      setIsOpen(!isOpen)
    }

    const links = [
        {path : "/", title: "Accueil"},
        {path: "/products", title: "Produits"},
        {path: "/login", title: "Connexion"},
    ]
   
  return (
    <header className='flex justify-between items-center'>
    {/* LOGO */}
    <div className='container mx-auto justify-between py-5 flex items-center'>

        <div
        onClick={() => navigate('/')}
         className='flex gap-3 items-center'>
      <img 
      src="../../public/img/logo.svg" 
      alt="logo shuriken"
      width={40}
      height={40} />
      <h3 className='text-xl font-bold'>{title}</h3>
    </div>

    {/* LIENS */}

{  size.width > 900 ? 
<DesktopMenu links={links} /> :
 !isOpen ? <OpenMenu toogleMenu={toogleMenu} />
  :
   <CloseMenu toogleMenu={toogleMenu} />}

   {isOpen && <MobileMenu links={links} />}
  
    </div>

  </header>
  )
}

export default Header