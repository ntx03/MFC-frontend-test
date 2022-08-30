import './PopupDelete.css';

function PopupDelete({ popupDelete, setPopupDelete, userInformation, setUsers, users }) {
    const deleteUser = () => {
        setUsers(users.filter(i => i.uuid !== userInformation.id));
        setPopupDelete(false);
    }

    return (

        <div className={popupDelete ? 'popup-delete popup-delete_open' : 'popup-delete'} >
            <div className='popup-delete__container'>
                <h3 className='popup-delete__title'>Вы действительно хотите удалить из базы данных пользователя {userInformation.name} {userInformation.lastname}?</h3>
                <div className='popup-delete__button-container'>
                    <button className='popup-delete__button' onClick={deleteUser}>Да</button>
                    <button className='popup-delete__button popup-delete__button_no' onClick={() => setPopupDelete(false)}>Нет</button>
                </div>
            </div>
            <div className='popup-delete__overlay' onClick={() => setPopupDelete(false)}></div>
        </div>

    );
}

export default PopupDelete;