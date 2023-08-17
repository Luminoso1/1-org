import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.aluracursos.com">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>

                <a href="https://www.aluracursos.com">
                    <img src="/img/twitter.png" alt="Facebook" />
                </a>

                <a href="https://www.aluracursos.com">
                    <img src="/img/instagram.png" alt="Facebook" />
                </a>
            </div>

            <img src="/img/logo.png" alt="logo org" />

            <strong>Desarrollador por: Dark</strong>

        </footer>
    );
}