import './User.css';
import { useState } from 'react';

function User({ id, index }) {

    const [disabled, setDisabled] = useState(false);

    // стейт фамилии
    const [lastName, setLastName] = useState('Schowalter');
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    // стейт имени
    const [firstName, setFirstName] = useState('Orion');
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    // стейт логина
    const [userName, setUserName] = useState('qschultz');
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }
    // стейт пароля
    const [password, setPassword] = useState('ORJ^[UpP:>');
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    // стейт почта
    const [email, setEmail] = useState('orland55@hotmail.com');
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    // стейт ip пользователя
    const [ip, setIp] = useState('95.220.15.231');
    const changeIp = (e) => {
        setIp(e.target.value);
    }
    // стейт сайта пользователя
    const [website, setWebsite] = useState('http://steuber.com');
    const changeWebsite = (e) => {
        setWebsite(e.target.value);
    }
    // стейт macAddress
    const [macAddress, setMacAddress] = useState('09:FC:F2:05:F6:9F');
    const changeMacAddress = (e) => {
        setMacAddress(e.target.value);
    }
    // стейт изображение пользователя
    const [image, setImage] = useState('http://placeimg.com/640/480/people');
    const changeImage = (e) => {
        setImage(e.target.value);
    }


    return (
        <div className='user'>
            <div className='user__container'><p className='user__text'>1</p></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeLastName} disabled={disabled} value={lastName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeFirstName} disabled={disabled} value={firstName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeUserName} disabled={disabled} value={userName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changePassword} disabled={disabled} value={password || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeEmail} disabled={disabled} value={email || ''}></input></div>
            <div className='user__container'><textarea className='user__input' onChange={changeIp} disabled={disabled} value={ip || ''}></textarea></div>
            <div className='user__container'><textarea className='user__input' onChange={changeWebsite} disabled={disabled} value={website || ''}></textarea></div>
            <div className='user__container'><textarea className='user__input' onChange={changeMacAddress} disabled={disabled} value={macAddress || ''}></textarea></div>
            <div className='user__container'><textarea className='user__input' onChange={changeImage} disabled={disabled} value={image || ''}></textarea></div>
            <button className='user__button' onChange={() => { setDisabled(disabled) }}>Изменить</button>
            <button className='user__button user__button-delete'>Удалить</button>
        </div>
    );
}

export default User;