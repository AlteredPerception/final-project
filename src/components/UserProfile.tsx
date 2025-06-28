import { useEffect, useState } from "react"
import type { Game, User } from "../types"
import { useLoaderData } from "react-router-dom"
import GameCard from "./GameCard"

export default function UserProfile() {
    const gameLibrary = useLoaderData() as Game[]
    const [userGame, setUserGame] = useState<Game[]>()
    const [user, setUser] = useState<User>({
        id: 0,
        firstName: "Alex",
        lastName: "Vance",
        userName: "FreemanLover2050",
        profileImage: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Alyx-Vance.Half-Life-2.webp",
        gameLibrary: []
    })
    useEffect(() => {
            setUser(user)
        }
    , [])

    const addGame = () => {
        setUserGame([...gameLibrary])
    }

    const removeGame = (id :number) => {
        const gameToRemove = prompt("Game to remove")
        const updatedGameList = userGame?.filter((game)=>{
            if(gameToRemove)
            if(game.id !== parseInt(gameToRemove)){
                return true;
            }
            return false
        })
        console.log(updatedGameList);
 setUserGame(updatedGameList);
        if(gameToRemove) {
           // setUserGame(previousItems => previousItems?.filter(item => item.id !== parseInt(gameToRemove)))
        }
    }
    console.log(userGame)
    return (
        <>
            <div className="d-flex" style={{width: "100vw"}}> 
                <div>
                    <img style={{borderRadius: "100%", width: "150px", height: "150px"}} src={user.profileImage} />
                </div>
                <div>
                    <div>
                        <button onClick={addGame} className="btn btn-success">Add Game</button>
                        <button onClick={() => removeGame(0)}
                        className="btn btn-primary">Remove Game</button>
                        <button className="btn btn-info">Info</button>
                        <button className="btn btn-danger">Delete Game</button>
                        <div className="d-flex flex-row overflow-hidden p-4 gap-4" 
                            style={{width: "100vw", height: "100vh", backgroundColor: "black"}}>
                        {
                            userGame?.map(game=><GameCard game={game} />)
                        }
                        </div>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}