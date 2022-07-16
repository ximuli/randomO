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
  const onPointerEnter = (e: React.PointerEvent) => { 
    isMobile() || addActiveClass()
  }
  const onPointerUp = (e: React.PointerEvent) => {
    isMobile() || props.openNewPage()
    isMobile() && addActiveClass()
  }
  return (
    <button className={`cyberpunkBtn btn ${activeClass}`} data-text='AVAILABLE NOW'
      onPointerEnter={onPointerEnter}
      onPointerUp={onPointerUp }
      onAnimationEnd={animationEndHandler}
    >
      AVAILABLE NOW
    </button>
  )
}
