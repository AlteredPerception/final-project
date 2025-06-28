export default function SiteHeader() {
    return (
        <>
            <div className="container-fluid bg-black text-white">
                <div className="d-flex justify-content-between">
                    <div style={{
                        border: "2px solid red",
                        backgroundColor: "gray",
                        width: "15vw",
                        height: "6vh",
                        textAlign: "center"}}>Game City</div>
                    <div style={{
                        border: "2px solid blue",
                        backgroundColor: "gray",
                        width: "15vw",
                        height: "6vh",
                        textAlign: "center"}}>
                            <input 
                                className="form-control rounded-pill bg-black text-white"
                                type="text" 
                                id="game-search"
                                name="gameSearch"
                                placeholder="Search game"
                            />
                        </div>
                    <div style={{border: "2px solid green",
                        backgroundColor: "gray",
                        width: "15vw",
                        height: "6vh",
                        textAlign: "center"}}>3</div>
                </div>
            </div>
        </>
    )
}