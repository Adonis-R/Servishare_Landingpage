import './header.css';

function Header() {
    return (
        <header>
            <h1 className='project-name'>ServiShare</h1>
            <nav className='nav-bar' style={{ overflow:'hidden' }}>
                <ul>
                    <li className='nav-item'><a href='#'>Home</a></li>
                    <li className='nav-item'><a href='#'>About</a></li>
                    <li className='nav-item'><a href='#'>Services</a></li>
                    <li className='nav-item'><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;