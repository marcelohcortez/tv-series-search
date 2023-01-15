import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <h1>HEADER COMPONENT</h1>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Header