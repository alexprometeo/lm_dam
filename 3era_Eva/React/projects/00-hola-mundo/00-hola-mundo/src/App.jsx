import { TwitterFollowCard } from './TwitterFollowCard.jsx'

function App() {

  // const format = (userName) => {return `@${userName}`}

  return (
    <>
      <TwitterFollowCard name="José" userName="xX_jose_Xx" isFollowing={true}/>
      <TwitterFollowCard/>
      <TwitterFollowCard name="Diane" userName="dianeee" isFollowing={true}/>
    </>
  )
}

export default App
