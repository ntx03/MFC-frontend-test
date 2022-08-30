import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import PopupDelete from '../PopupDelete/PopupDelete';
import PopupSuccessfully from '../PopupSuccessfully/PopupSuccessfully';
import PopupAddUser from '../PopupAddUser/PopupAddUser';


function App() {
  // здесь лежат пользователи для рендера
  const [users, setUsers] = React.useState([]);

  // берем пользователей при загрузке сайта
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

  // состояния попапа удаления
  const [popupDelete, setPopupDelete] = React.useState(false);
  const [userInformation, setUserInformation] = React.useState([]);

  // состояние попапа информирования
  const [popup, setPopup] = React.useState(false);
  const [popupError, setPopupError] = React.useState(false);
  //состояние попапа добавления пользователя
  const [popupAdd, setPopupAdd] = React.useState(false);

  return (
    <div className="app">
      <Header />
      <div className='app__container '>
        <Main
          setPopupDelete={setPopupDelete}
          setUserInformation={setUserInformation}
          users={users}
          setUsers={setUsers}
          setPopup={setPopup}
          setPopupError={setPopupError}
          setPopupAdd={setPopupAdd}

        />
      </div>
      <PopupDelete popupDelete={popupDelete} setPopupDelete={setPopupDelete} userInformation={userInformation} setUsers={setUsers} users={users} />
      <PopupSuccessfully popup={popup} setPopup={setPopup} popupError={popupError} />
      <PopupAddUser popupAdd={popupAdd} setPopupAdd={setPopupAdd} />
    </div>
  );
}

export default App;
