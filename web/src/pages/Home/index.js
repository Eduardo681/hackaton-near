const Home = () => {
    return <div className="home">
        <div className="half left">
            <div>
                <img src="logo.svg" alt="Logo"/>
                <span>
                As finanças <br/>ao seu alcance.
            </span>
            </div>
        </div>
        <div className="half right">
            <div className="title">
                Bem vindo ao <span style={{color: "#00CFC3"}}>Near</span>
            </div>
            <form action="">
                <input type="text" placeholder="Informe seu e-mail"/>
                <input type="password" placeholder="Informe sua senha"/>
                <button className="btn-primary">Entrar</button>
            </form>
        </div>
    </div>
}

export default Home;