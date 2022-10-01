import React from 'react'
import FindMe from './FindMe';
import MainSection from './MainSection';
import Portfolio from './Portfolio';

function Home(props) {
  const {toggle} = props
  return (
    <div>
    <MainSection toggle={toggle}/>
    <Portfolio />
    <FindMe />
    </div>
  )
}

export default Home