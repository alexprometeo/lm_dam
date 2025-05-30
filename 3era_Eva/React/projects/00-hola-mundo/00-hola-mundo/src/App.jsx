import { TwitterFollowCard } from './TwitterFollowCard.jsx'

function App() {

  // const format = (userName) => {return `@${userName}`}

  const usuarios = [
    {
      id: 1,
      name: "Carlos",
      userName: "lucasleonrufi",
      isFollowing: true
    },
    {
      id: 2,
      name: "Dani",
      userName: "perridan",
      isFollowing: true
    },
    {
      id: 3,
      name: "Adrian",
      userName: "pixeladri",
      isFollowing: true
    },
    {
      id: 4,
      name: "Alex",
      userName: "frongalex",
      isFollowing: true
    }    
  ];

  return (
    <>
      {
        usuarios.map((usuario) => {        
            const {id, name, userName, isFollowing} = usuario

            return (
              <TwitterFollowCard
                key={id}
                name={name}
                userName={userName}
                isFollowing={isFollowing}
              />
            )
        })
      }
    </>
  )
}

export default App
