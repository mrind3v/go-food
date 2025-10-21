import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><span>HOME PAGE</span></Layout>}/>
            <Route path="/user-profile" element={<Layout><span>USER PROFILE PAGE</span></Layout>}/>
            <Route path="*" element={<Navigate to="/" />}/> 
        </Routes>
    )
}

export default AppRoutes