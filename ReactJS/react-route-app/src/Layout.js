import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header style={{background : "lightgray", padding : 16, fontSize : 24}}>
                Header
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;