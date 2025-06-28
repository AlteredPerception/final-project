import { useRouteError } from "react-router-dom"

export default function ErrorComponent() {
    
    const error = useRouteError() as any;
    console.log(error)
    return (
        <>
            <div className="text-white">
                <div>
                    <p>Error Message: {error.message}</p>
                    <p>Error Statue: {error.statusText} </p>
                </div>
            </div>
        </>
    )
}