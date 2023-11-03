import React from 'react'
import './header.css'

//context
import { useTheme } from '../../Context/ThemeContext'

//context
import ThemeSwitcher from '../InteractiveElements/ThemeSwitcher/ThemeSwitcher'


function Header() {
    const { theme } = useTheme()
    return (
        <header className='header'>
            <h1 className={`heading1 ${theme === 'light' ? 'headerLogo' : 'whiteText'}`}>
                devfinder
            </h1>
            <ThemeSwitcher />
        </header>
    )
}

export default Header