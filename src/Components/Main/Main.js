import React from 'react';
import './Main.css';
import User from './User/User';

function Main() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('https://fakerapi.it/api/v1/users?_quantity=20')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else console.log(res.status);
            })
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log(e.message);
            })
    }, []);
    console.log(users);
    return (
        <main className='main'>
            <h1 className='main__title'>База данных пользователей приложения</h1>
            <div className='main__list'>
                <div className='main__list-header'>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>п/п</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Фамилия</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Имя</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Имя пользователя</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Пароль</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Почта</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>ip адресс</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Сайт</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>macAddress</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Cсылка на изображение</p></div>

                </div>
                <User />
            </div>
        </main>
    );

}

export default Main;