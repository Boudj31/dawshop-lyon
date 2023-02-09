import React from 'react'
import HeaderItem from './HeaderItem'

export const DesktopMenu = ({links}) => {
  return (
    <nav>
    <ul className='flex justify-between gap-10'>
        {links.map(({title, path}) => (
            <HeaderItem key={title} path={path} title={title} />
        ))}
      <li className='font-bold cursor-pointer'>
        <a href="">Panier</a>
      </li>
    </ul>
  </nav>
  )
}
