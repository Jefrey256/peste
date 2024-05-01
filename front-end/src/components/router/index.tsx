import { Route, Routes } from "react-router-dom"
// Aki vai as Rotas 
import Home from "../pages/home"

import Error404 from "../pages/Eroor404"
const Rotas = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="*"element={<Error404 />} />
        </Routes>
    )
}

export default Rotas