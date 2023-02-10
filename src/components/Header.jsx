import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { toggleCart } from '../store/actions/cartActions'
import { getCountCart, getIsCartActive } from '../store/selectors/cartSelector'
import Cart from './Cart'
import { DesktopMenu } from './DesktopMenu'
import CloseMenu from './Icons/CloseMenu'
import OpenMenu from './Icons/OpenMenu'
import { MobileMenu } from './MobileMenu'

const Header = ({title = "Dawshop"}) => {

    const navigate = useNavigate()
    const size = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)
    const isCartOpen = useSelector(getIsCartActive)

    const dispatch = useDispatch();
    const countItems = useSelector(getCountCart)
    const toogleCartWithReducer = () => {
        dispatch(toggleCart())
    }

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
    <div className='container relative mx-auto justify-between py-5 flex items-center'>
    <Cart isCartActive={isCartOpen}/>
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
<DesktopMenu
 links={links}
 toogleCartWithReducer={toogleCartWithReducer}
 countItems={countItems}
  /> :
 !isOpen ? <OpenMenu toogleMenu={toogleMenu} />
  :
   <CloseMenu toogleMenu={toogleMenu} />}

   {isOpen &&
    <MobileMenu 
    links={links}
    toogleCartWithReducer={toogleCartWithReducer}
    countItems={countItems}
   />}
  
    </div>

  </header>
  )
}

export default Header