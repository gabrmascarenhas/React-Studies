import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import './main.css';
export function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
        
    );
}
