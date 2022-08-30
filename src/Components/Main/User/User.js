import './User.css';
import { useState } from 'react';

function User(props) {

    const [disabled, setDisabled] = useState(true);

    // стейт фамилии
    const [lastName, setLastName] = useState(props.lastName);
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    // стейт имени
    const [firstName, setFirstName] = useState(props.firstName);
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    // стейт логина
    const [userName, setUserName] = useState(props.userName);
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }
    // стейт пароля
    const [password, setPassword] = useState(props.password);
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    // стейт почта
    const [email, setEmail] = useState(props.email);
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    // стейт ip пользователя
    const [ip, setIp] = useState(props.ip);
    const changeIp = (e) => {
        setIp(e.target.value);
    }
    // стейт сайта пользователя
    const [website, setWebsite] = useState(props.website);
    const changeWebsite = (e) => {
        setWebsite(e.target.value);
    }
    // стейт macAddress
    const [macAddress, setMacAddress] = useState(props.macAddress);
    const changeMacAddress = (e) => {
        setMacAddress(e.target.value);
    }
    // стейт изображение пользователя
    const [image, setImage] = useState(props.image);
    const changeImage = (e) => {
        setImage(e.target.value);
    }
    const deleteUser = () => {
        const user = {
            name: props.firstName,
            lastname: props.lastName,
            id: props.id
        };

        props.setPopupDelete(true);
        props.setUserInformation(user);
    }

    return (
        <div className='user'>
            <div className='user__container user__container_first'><p className='user__text'>{props.index}</p></div>
            <div className='user__container'  ><input type='text' className='user__input' onChange={changeLastName} disabled={disabled} value={lastName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeFirstName} disabled={disabled} value={firstName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeUserName} disabled={disabled} value={userName || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changePassword} disabled={disabled} value={password || ''}></input></div>
            <div className='user__container'><input type='text' className='user__input' onChange={changeEmail} disabled={disabled} value={email || ''}></input></div>
            <div className='user__container'><input className='user__input' onChange={changeIp} disabled={disabled} value={ip || ''}></input></div>
            <div className='user__container'><input className='user__input' onChange={changeWebsite} disabled={disabled} value={website || ''}></input></div>
            <div className='user__container'><input className='user__input' onChange={changeMacAddress} disabled={disabled} value={macAddress || ''}></input></div>
            <div className='user__container'><input className='user__input' onChange={changeImage} disabled={disabled} value={image || ''}></input></div>
            <button className={disabled ? 'user__button ' : 'user__button user__button-save'} onClick={() => setDisabled(!disabled)}>{disabled ? 'Редактировать' : 'Сохранить'}</button>
            <button className='user__button user__button-delete' onClick={deleteUser}>Удалить</button>
        </div>
    );
}

export default User;