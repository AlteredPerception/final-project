import { useEffect, useState } from "react"
import type { Game } from "../types"

type GameCardProps = {
    game: Game
}

export default function GameCard({ game } : GameCardProps) {
    console.log('gameCard',game)
    const [gameTitle, setGameTitle] = useState<Game>()
    const [isHovering, setIsHovering] = useState(false)

    useEffect(
        () => {
            setGameTitle(game)
        }, []
    )

    const handleMouseEnter = () => setIsHovering(true)
    
    const handleMouseLeave = () =>setIsHovering(false)

        
    return (
        <>
            <div 
                className="card bg-black border border-2 border-white" 
                style={{height: "290px"}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                
                <img 
                    className="card-img-top"
                    src={gameTitle?.thumbnail} 
                    width="100px"
                    height="200px"
                    alt="" 
                />
                
                <div className="card-body text-white">
                    <div className="d-flex flex-row gap-2">
                        <button className="btn btn-success">{">"}</button>
                        <p>{gameTitle?.title}</p>
                    </div>
                </div>
                {isHovering && 
                    <div className="bg-black text-white">
                        <p>{gameTitle?.hours}</p>
                    </div>
                }
            </div>
        </>
    )
}