import './PopupAddUser.css';
import { useState } from 'react';
import { addUsers } from '../../utils/api';

function PopupAddUser({ popupAdd, setPopupAdd, setUsers, users }) {
    const [nameUser, setNameUser] = useState('');
    const changeNameUser = (e) => {
        setNameUser(e.target.value);
    }
    const [lastNameUser, setLastNameUser] = useState('');
    const changeLastNameUser = (e) => {
        setLastNameUser(e.target.value);
    }
    const [login, setLogin] = useState('');
    const changeLogin = (e) => {
        setLogin(e.target.value);
    }
    const [password, setPassword] = useState('');
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const [email, setEmail] = useState('');
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const [ip, setIp] = useState('');
    const changeIp = (e) => {
        setIp(e.target.value);
    }
    const [website, setWebsite] = useState('');
    const changeWebsite = (e) => {
        setWebsite(e.target.value);
    }
    const [mac, setMac] = useState('');
    const changeMac = (e) => {
        setMac(e.target.value);
    }
    const [image, setImage] = useState('');
    const changeImage = (e) => {
        setImage(e.target.value);
    }

    const closePopup = () => {
        setPopupAdd(false);
    }
    // добавляем пользователя в БД
    const addUser = () => {
        const user = {
            email: email,
            firstname: nameUser,
            id: Math.random() * 1000,
            image: image,
            ip: ip,
            lastname: lastNameUser,
            macAddress: mac,
            password: password,
            uuid: String(Math.random() * 10000),
            website: website,
            login: login
        }
        addUsers(user)
            .then(() => {
                // setUsers([user, ...users]);
                //closePopup();
            })
            .catch((e) => {
                console.log(e.message);
            })
        setUsers([user, ...users]);
        closePopup();
    }

    return (
        <div className={popupAdd ? 'popup__add popup__add_open' : 'popup__add'} >
            <div className='popup-add__container'>
                <h3 className='popup-add__title'>Заполните поля формы</h3>
                <div className='popup__data-container'>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Имя:</p>
                        <input type='text' value={nameUser || ''} onChange={changeNameUser} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Фамилия:</p>
                        <input type='text' value={lastNameUser || ''} onChange={changeLastNameUser} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Логин:</p>
                        <input type='text' value={login || ''} onChange={changeLogin} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Пароль:</p>
                        <input type='text' value={password || ''} onChange={changePassword} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Email:</p>
                        <input type='email' value={email || ''} onChange={changeEmail} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>ip пользователя:</p>
                        <input type='text' value={ip || ''} onChange={changeIp} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Web сайт:</p>
                        <input type='text' value={website || ''} onChange={changeWebsite} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>mac Address:</p>
                        <input type='text' value={mac || ''} onChange={changeMac} className='popup__data-input' />
                    </div>
                    <div className='popup__data-box'>
                        <p className='popup__data-text'>Картинка:</p>
                        <input type='text' value={image || ''} onChange={changeImage} className='popup__data-input' />
                    </div>
                </div>
                <button className='popup-add__button' onClick={addUser} >Добавить в БД</button>
            </div>
            <div className='popup-add__overlay' onClick={closePopup} ></div>
        </div>
    );
}

export default PopupAddUser;