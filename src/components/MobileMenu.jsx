import React from 'react'

export const MobileMenu = ({links, toogleCartWithReducer, countItems}) => {
        return (
            <nav className="flex flex-col items-center p-4 ">
                    <ul className="absolute bg-white top-0 right-0 p-4 mt-16 z-10 w-full border-pink-700 border-4">
                        {links.map(({ title, href }) => (
                            <li className="mb-4" key={title}>
                                <a href={href} className="block">
                                    {title}
                                </a>
                            </li>
                        ))}
                           <div className='relative'>
                    <p className='transform-neg-full bg-pink-700 absolute left-12 bottom-2 text-pink-50 p-1'>{countItems}</p>
                    <li className='font-bold' onClick={toogleCartWithReducer}>Panier</li>
                </div>
                    </ul>
            </nav>
        )
}
