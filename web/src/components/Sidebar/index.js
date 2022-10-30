const Sidebar = () => {
    const handleLogout = () => {

    }
    return <div className="sidebar">
        <img src="logo.svg" alt="logo" className="logo"/>
        <button onClick={handleLogout}>
            <img src="sair.svg" alt="sair"/>
        </button>
    </div>
}


export default Sidebar;