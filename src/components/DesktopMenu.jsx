import React from 'react'
import { useDispatch } from 'react-redux'
import { toogleCart } from '../store/actions/cartActions'
import HeaderItem from './HeaderItem'

export const DesktopMenu = ({ links, countItems, toogleCartWithReducer }) => {

  return (
    <nav>
      <ul className='flex justify-between gap-10'>
        {links.map(({ title, path }) => (
          <HeaderItem key={title} path={path} title={title} />
        ))}
        {/* PANIER */}
        <div className='relative'>
          <p className='transform-neg-full bg-pink-700 absolute left-12 bottom-2 text-pink-50 p-1'>{countItems}</p>
          <li className='font-bold' onClick={toogleCartWithReducer}>Panier</li>
        </div>
      </ul>
    </nav>
  )
}
