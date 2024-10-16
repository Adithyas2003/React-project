import {Link,Outlet} from "react-router-dom"

function Layout(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link" >Home </Link> 
                </li>
                <li className="nav-item">
                <Link to="/Contact" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link">Product</Link>
                </li>

                
            </ul>
            </div>
        </div>
        </nav>
        <Outlet/>

        </>
    )
        
 
    }
    export default Layout
