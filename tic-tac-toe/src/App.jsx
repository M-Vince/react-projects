import React from 'react'
import Player from './component/Player'
import GameBoard from './component/GameBoard'

function App() {
  return (
    <main >
      {/* Game Container */}
      <div className='max-w-180 mx-auto my-12 p-8 rounded-md bg-gray-600 shadow-[0 0 20px rgba(0, 0, 0, 0.5)] relative' >  
        {/* Players */}
        <ol className='my-4 flex justify-center items-center gap-8'> 
          <Player playerName='Player 1' symbol='X'/>
          <Player playerName='Player 2' symbol='O'/>
        </ol>

        {/* Game Board */}
        <GameBoard />

      </div>

    </main>
  )
}

export default App