import { mock_data } from "../mock-data"
import type { Game } from "../types"
import GameCard from "./GameCard"
import { useLoaderData } from "react-router-dom"

export const gameCatalogLoader = () => {
    return mock_data
}

export default function GameCatalog() {
    const gameCatalog = useLoaderData() as Game[]

    //useEffect(() =>{
    //    setMockData(mockData)
    //},[])
    

    return (
        <>
            <div className="d-flex flex-row gap-4 m-2" style={{width: "100vw", height: "100vh"}}>
                {
                    gameCatalog.map(game =>
                        <GameCard key={game.id} game={game} />
                    )
                }
            </div>
        </>
    )
}