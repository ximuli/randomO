import React from 'react'
import './App.scss'
import games from './assets/data/games'
import CyberpunkBtn from './components/CyberpunkBtn'
import GithubCorner from './components/GithubCorner'
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
      <GithubCorner />
      <CyberpunkBtn openNewPage={ clickToOpen } />
    </div>
  )
}

export default App
