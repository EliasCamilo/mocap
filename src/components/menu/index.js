import Link from "next/link"

export default function Menu() {
    return (
        <>
            <div className="menu">
                <div className="label">Menu</div>
                <div className="spacer"></div>
                <Link className="item" href={{pathname: "/biografia"}}>Biografia</Link>
                <Link className="item" href={{pathname: "/areas-atuacao"}}>Áreas de atuação</Link>
                <Link className="item" href={{pathname: "/portfolio"}}>Portfólio</Link>
                <Link className="item" href={{pathname: "/fale-conosco"}}>Fale conosco</Link>
            </div>
        </>
    )
}