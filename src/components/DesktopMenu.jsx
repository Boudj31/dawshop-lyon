import React from 'react'
import { useDispatch } from 'react-redux'
import { toogleCart } from '../store/actions/cartActions'
import HeaderItem from './HeaderItem'

export const DesktopMenu = ({links}) => {

  const dispatch = useDispatch()

  const toogleCartWithReducer = () => {
    dispatch(toogleCart())
  }
  return (
    <nav>
    <ul className='flex justify-between gap-10'>
        {links.map(({title, path}) => (
            <HeaderItem key={title} path={path} title={title} />
        ))}
      <li
      onClick={toogleCartWithReducer} 
      className='font-bold cursor-pointer'>
        Panier
      </li>
    </ul>
  </nav>
  )
}
