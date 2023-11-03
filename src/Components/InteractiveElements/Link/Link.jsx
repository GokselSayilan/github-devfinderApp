import React, { useState } from 'react'
import './link.css'

//context
import { useTheme } from '../../../Context/ThemeContext'

function Link({ icon, label }) {
  const { theme } = useTheme()
  const [isHover, setIsHover] = useState()

  const linkColor = (theme === 'light' ? 'queenBlueText' : 'whiteText')
  const underline = isHover ? 'underline' : ''

  return (
    <div className={`link ${linkColor} ${(label === null|| label === '') && 'notavilable'}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon}
      <p className={`linkLabel bodyText ${underline}`}>{(label === null || label === '') ? 'Not Available' : label}</p>
    </div>
  )
}

export default Link