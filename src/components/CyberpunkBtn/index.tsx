import React, { useState } from 'react'
import './index.scss'

/* 该组件参考自：
* https://freefrontend.com/css-buttons/
* https://codepen.io/stevenlei/pen/ZEpyBod
*/
interface IProps {
  clickHandler(event: React.MouseEvent): void
}

export default function CyberpunkBtn (props: IProps) {
  return (
    <button className='cyberpunkBtn btn' data-text='AVAILABLE NOW' onClick={props.clickHandler}>
      AVAILABLE NOW
    </button>
  )
}
