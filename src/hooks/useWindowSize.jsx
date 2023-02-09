import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    // initalisation des varaibles
    const [windowSize, setWindowSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    })

    // méthodes pour mettre à jour les variables
    const handleResize = () => {
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        })

    }

    useEffect(() => {
        // assignation du listener
        window.addEventListener('resize', handleResize)
        // retire le listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }


    }, [])

  return windowSize
}

export default useWindowSize