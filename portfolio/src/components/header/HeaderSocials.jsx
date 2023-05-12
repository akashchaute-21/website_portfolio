import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import "./Header.css"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/akash-chaute-635175210/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/akashchaute-21" target="_blank"><FaGithub/></a>
      <a href="mailto:akashchaute@gmail.com" target="_blank"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials
