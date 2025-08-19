
import { Route, Routes,BrowserRouter } from "react-router-dom";

import { HomePage } from "../Pages/HomePage";

export function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>

    )
}