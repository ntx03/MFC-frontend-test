import './PopupSuccessfully.css';

function PopupSuccessfully({ popup, setPopup, popupError }) {

    return (
        <div className={popup ? 'popup popup_open' : 'popup'} >
            <div className='popup__container'>
                <h3 className='popup__title'>{popupError ? 'Произошл сбой при загрузке из БД. Попробуете еще раз!' : 'Данные из БД успешно загружены!'}</h3>
                <button className='popup__button' onClick={() => setPopup(false)}>Закрыть</button>
            </div>
        </div>
    );
}

export default PopupSuccessfully;