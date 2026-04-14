import './Header.css'

export default function Header(){
    return(
        <header>
            <h1 className= "title">Seattle</h1>

            <nav>
                <ul className= "nav-links">
                    <li><a href= "#topic">Topic</a></li>
                    <li><a href= "#Introduction">Introduction</a></li>
                    <li><a href= "#funFacts">Fun Facts</a></li>
                    <li><a href= "#tourist places">Tourist Places</a></li>
                    <li><a href= "#footer">Footer</a></li>
                </ul>
            </nav>
        </header>
    )
}