import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className="header">
                <Link href={{ pathname: "/" }}><Image className="header-logotipe" src={require('@/assets/img/logotipes/mocap-logotipe.svg')} height={40} /></Link>
            </div>
        </>
    )
}