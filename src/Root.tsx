
//import './App.css'

import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"
import SiteHeader from "./components/SiteHeader"

function Root() {

  return (
    <>
      <div>
        <SiteHeader />
        <div className="d-flex">
          <SideBar />
          <div className="d-flex 
                justify-content-center 
                align-content-center 
                align-items-center 
                border border-danger">
            <div className="border border-secondary-subtle text-white">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Root
