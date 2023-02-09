import React from 'react'

export const MobileMenu = ({links}) => {
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
                    <li className="relative">
                        <button className="font-bold">
                            Panier
                        </button>
                    </li>
                </ul>
        </nav>
  )
}
