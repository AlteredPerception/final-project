import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <section>
                    <h1 className="h1">Welcome to Game-City.</h1>
                    <h2 className="h2 m-1">The best place to play some of the greatest games.</h2>
                    <p>
                        We believe everyone should be able to play the latest games <br />
                        as well as many of the classics. Our library of games is vast. <br />
                        Please look through our library <Link to="/catalog">Catalog</Link>
                    </p>
                </section>
                
            </div>
        </>
    )
}