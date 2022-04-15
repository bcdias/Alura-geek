import {Routes, Route} from "react-router-dom"
import FormularioLogin from "./components/formularioLogin";
import PaginaProdutos from "./components/paginaProdutos";
import Principal from "./components/principal";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Principal />} ></Route>
            <Route path="/login" element={<FormularioLogin />} ></Route>
            <Route path="/produtos/:secao/:id" element={<PaginaProdutos />} ></Route>
        </Routes>
    )
}

export default Router
