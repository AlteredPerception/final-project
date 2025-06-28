import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "./components/HomePage";
import GameCatalog, { gameCatalogLoader } from "./components/GameCatalog";
import UserProfile from "./components/UserProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/catalog",
                element: <GameCatalog />,
                loader: gameCatalogLoader
            },
            {
                path: "/user-profile",
                element: <UserProfile />,
                loader: gameCatalogLoader
            }
        ]
    }
])
