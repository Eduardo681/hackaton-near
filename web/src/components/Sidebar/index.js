import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

    return <div className="sidebar">
        <img src="logo.svg" alt="logo" className="logo"/>
        <button onClick={handleLogout} style={{
            cursor: "pointer"
        }}>
            <img src="sair.svg" alt="sair"/>
        </button>
    </div>
}


export default Sidebar;