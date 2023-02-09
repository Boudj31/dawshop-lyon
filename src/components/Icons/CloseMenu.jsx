import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

const CloseMenu = ({toogleMenu}) => {
  return (
    <FontAwesomeIcon
    onClick={toogleMenu} 
    icon={faTimes}
    className={'absolute right-10'}
    size={"lg"} />
  )
}

export default CloseMenu