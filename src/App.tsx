import React from 'react'
import './App.scss'
import games from './assets/data/games'
import CyberpunkBtn from './components/CyberpunkBtn'
import { genarateRandomNum } from '@/utils/common'

function App() {
  const clickToOpen = () => {
    const gamesLength = games.length
    const randomIndex = genarateRandomNum(gamesLength)
    // window.open在手机端微信、Safari无效，所以改用location.href
    window.location.href = games[randomIndex].link
  }
  return (
    <div className="App">
      {/* <button className='btn' onClick={clickToOpen}>随机打开一个游戏</button> */}
      <CyberpunkBtn openNewPage={ clickToOpen } />
    </div>
  )
}

export default App
