import React, { useState } from 'react'
import './index.scss'
// vite 配置 @ 路径别名 http://lavecoral.me/vue/262.html
import { isMobile } from '@/utils/common'

/* 该组件参考自：
* https://freefrontend.com/css-buttons/
* https://codepen.io/stevenlei/pen/ZEpyBod
*/
interface IProps {
  openNewPage(): void
}

export default function CyberpunkBtn(props: IProps) {
  const [activeClass, setActiveClass] = useState('')

  const addActiveClass = () => {
    setActiveClass('active')
  }
  const clearActiveClass = () => {
    setActiveClass('')
  }
  const animationEndHandler = () => {
    clearActiveClass()
    isMobile() && props.openNewPage()
  }
  const clickHandler = () => {
    props.openNewPage()
  }
  const touchEndHandler = () => {
    addActiveClass()
  }
  return (
    <button className={`cyberpunkBtn btn ${activeClass}`} data-text='AVAILABLE NOW'
      onMouseEnter={addActiveClass} // PC
      onTouchEnd={touchEndHandler} // Mobile
      onAnimationEnd={animationEndHandler}
      {...isMobile() ? {} : {onClick:clickHandler}}
    >
      AVAILABLE NOW
    </button>
  )
}
