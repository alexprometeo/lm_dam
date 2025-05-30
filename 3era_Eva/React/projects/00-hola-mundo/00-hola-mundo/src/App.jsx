import { TwitterFollowCard } from './TwitterFollowCard.jsx'

function App() {

  // const format = (userName) => {return `@${userName}`}

  return (
    <>
      <TwitterFollowCard name="José" userName="xX_jose_Xx" initialIsFollowing={true}/>
      <TwitterFollowCard/>
      <TwitterFollowCard name="Diane" userName="dianeee" initialIsFollowing={true}/>
    </>
  )
}

export default App
