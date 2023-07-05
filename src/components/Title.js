import React from 'react'

import api from '../images/api.jpg'
import logo from '../images/logo.jpg'

function Title() {
    return (
        <>
        <div className="logo__api"><a href="https://gnews.io/" target="_blank" rel="noreferrer"><img src={api} alt="GNews API" /></a></div>
        <div className="logo__title"><a href="https://www.nytimes.com/ " target="_blank" rel="noreferrer"><img src={logo} alt="The React News App" /></a></div>
        </>
        )
}

export default Title

