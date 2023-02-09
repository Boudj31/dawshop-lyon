import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

const OpenMenu = ({toogleMenu}) => {
  return (
    <FontAwesomeIcon 
    onClick={toogleMenu}
    icon={faBars}
    className={'absolute right-10'}
    size={"lg"} />
  )
}

export default OpenMenu