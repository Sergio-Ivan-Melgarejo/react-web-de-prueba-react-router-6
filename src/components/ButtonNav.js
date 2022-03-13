import React, { useState } from 'react'
import "./buttonNav.css"

const ButtonNav = ({setActive,active}) => {
    const [noAnimation, setNoAnimation] = useState(true);
    return (
        <button className={noAnimation ? 'buttonNav__button no-animation' : "buttonNav__button"} onClick={()=>{setActive(!active);setNoAnimation(false)}}>
            <div className='buttonNav__line buttonNav__line-1'></div>
            <div className='buttonNav__line buttonNav__line-2'></div>
            <div className='buttonNav__line buttonNav__line-3'></div>
        </button>
    )
}
export default ButtonNav;