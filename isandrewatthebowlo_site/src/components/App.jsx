import React, { Fragment } from 'react'

const App = () => (
  <Fragment>
    <header className='pv5 bg-green black-80'>
      <h1 className='mt0 mb1 tc'>Is Andrew at the Bowlo?</h1>
      
    </header>
    <h2 id='isHeThere' className='pt4 f-10rem pb1 tc ttu lawngreen'>I don't actually know</h2>
    <div id="AndrewsMessage" className='tc ttc'>what does he say?</div>
    <div id="sinceWhen" className='tc ttc'>but since when?</div>
  </Fragment>
)


export default App
