import React, { Fragment } from 'react'

const App = () => (
  <Fragment>
    <header className='pv5 bg-green black-80'>
      <h1 className='mt0 mb1 tc'>Is Andrew at the Bowlo?</h1>
      
    </header>
    <h2 id='isHeThere' className='pt4 f-10rem pb1 tc ttu lawngreen'>I don't actually know</h2>
    <div id="AndrewsMessage" className='tc ttc'>what does he say?</div>
    <div id="sinceWhen" className='tc ttc f-0-6em'>but since when?</div>
    <div id="howDidHe" className='tc ttc'>Built by Andrew using an <a href="https://github.com/andrewlorien/isAndrewAtTheBowlo">ambitious collection of services</a>, inspired by <a href="https://twitter.com/dylanbevis">Dylan</a></div>
  </Fragment>
)


export default App
