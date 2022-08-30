import './Header.css';
import Marquee from 'react-double-marquee';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>

                <Marquee>Тестовое задание Front-end разработчик ГАУ ТО “МФЦ”, Качур Андрея Леонидовича.</Marquee></div>

        </header>
    );
}

export default Header;