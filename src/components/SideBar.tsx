import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <>
            <div className="bg-black text-white text-center col-sm-4"
                style={{width: "10vw", height: "100vh"}}
            >
                <div className="border border-white rounded-2 p-2 ms-2">
                    <Link to="/home">Home</Link> 
                </div>
                <div className="border border-white rounded-2 p-2 ms-2">
                    <Link to="/catalog">Catalog</Link>
                </div>
                <div className="border border-white rounded-2 p-2 ms-2">
                    <Link to="/user-profile">User Profile</Link>
                </div>
            </div>
        </>
    )
}