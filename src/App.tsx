import React from 'react'
import './App.scss'
import games from './assets/data/games'
import CyberpunkBtn from './components/CyberpunkBtn'
import { genarateRandomNum } from './utils/common'

function App() {
  const clickToOpen = (e: React.MouseEvent) => {
    // console.log('e', e)
    // window.open('https://baidu.com')
    // console.log(games)
    const gamesLength = games.length
    const randomIndex = genarateRandomNum(gamesLength)
    console.log(games[randomIndex])
    window.open(games[randomIndex].link)
  }
  return (
    <div className="App">
      {/* <button className='btn' onClick={clickToOpen}>随机打开一个游戏</button> */}
      <CyberpunkBtn clickHandler={ clickToOpen } />
    </div>
  )
}

export default App
