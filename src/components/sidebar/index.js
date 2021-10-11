import Link from 'next/link'
import './style.scss'

export default function Sidebar() {
    return (
        <nav className="nav">
            <input className="input" placeholder="Search..." />
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    )
}
