import React from 'react';
import './Main.css';
import '../Main/User/User.css';
import User from './User/User';
import { getUsers } from '../../utils/api';

function Main({ setPopupDelete, setUserInformation, users, setUsers, setPopup, setPopupError, setPopupAdd }) {

    const [usersNumber, setUsersNumber] = React.useState(20);
    const onChangeUserNumber = (e) => {
        setUsersNumber(e.target.value);
    }
    const uploadUsers = () => {
        getUsers(usersNumber)
            .then((res) => {
                setUsers(users.concat(res.data));
                setPopup(true);
                setPopupError(false);
            })
            .catch((e) => {
                console.log(e.message);
                setPopupError(true);
            })
        // fetch(`https://fakerapi.it/api/v1/users?_quantity=${usersNumber}`)
        //     .then((res) => {
        //         if (res.ok) {
        //             return res.json();
        //         } else console.log(res.status);
        //     })
        //     .then((res) => {
        //         setUsers(users.concat(res.data));
        //         setPopup(true);
        //         setPopupError(false);
        //     })
        //     .catch((e) => {
        //         console.log(e.message);
        //         setPopupError(true);
        //     })
    }


    return (
        <main className='main'>
            <h1 className='main__title'>База данных пользователей приложения</h1>
            <div className='main__list'>
                <div className='main__button-container'>
                    <button className='main__button' onClick={() => setPopupAdd(true)}>Добавить пользователя в БД</button>
                    <div className='main__button-box'>
                        <p className='main__button-text'>Количество дополнительно подгружаемых пользователей: </p>
                        <input type='number' value={usersNumber || ''} onChange={onChangeUserNumber} className='main__input' />
                        <button className='main__button' onClick={uploadUsers}>Загрузить пользователей из БД</button>
                    </div>
                </div>
                <div className='main__list-header'>
                    <div className='main__list-header-text-container main__list-header-text-container-first-child'><p className='main__list-header-text'>п/п</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Фамилия</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Имя</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Логин</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Пароль</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Почта</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>ip адресс</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Сайт</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>mac Address</p></div>
                    <div className='main__list-header-text-container'><p className='main__list-header-text'>Image</p></div>
                </div>
                {users.map((i, index) => {
                    return <User
                        id={i.uuid}
                        index={index + 1}
                        key={i.uuid}
                        lastName={i.lastname}
                        firstName={i.firstname}
                        userName={i.username}
                        password={i.password}
                        email={i.email}
                        ip={i.ip}
                        website={i.website}
                        macAddress={i.macAddress}
                        image={i.image}
                        users={users}
                        setPopupDelete={setPopupDelete}
                        setUserInformation={setUserInformation}
                    />
                })}
            </div>
        </main>
    );

}

export default Main;