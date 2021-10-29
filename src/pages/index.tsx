export default function Home() {
  return (
    <div className="main_login">
        <div className="login">
            <div className="box">
                <div className="h_logo">
                    <h2>Ango</h2>
                    <h3>Torrent</h3>
                </div>
                <form action="">
                    <section>
                        <div className="text_input">
                            <input type="text" placeholder="User name"/>
                        </div>
                        <div className="text_input">
                            <input type="password" placeholder="Palavra passe"/>
                        </div>
                        <button className="btn_in">
                            <p>Entrar</p>
                        </button>
                    </section>
                </form>
            </div>
        </div>
    </div>
  )
}
