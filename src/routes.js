import {Routes, Route} from "react-router-dom"
import FormularioLogin from "./components/formularioLogin";
import Principal from "./components/principal";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Principal />} ></Route>
            <Route path="/login" element={<FormularioLogin />} ></Route>
        </Routes>
    )
}

export default Router
