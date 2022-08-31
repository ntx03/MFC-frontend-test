const checkError = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const addUsers = (user) => {
    return fetch(`https://fakerapi.it/api/v1/users/${user}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(checkError)
}

export const deleteUser = (userId) => {
    const newConfing = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
    }
    return fetch(`https://fakerapi.it/api/v1/users/${userId}`, newConfing)
        .then(checkError);
}

export const getUsers = (number) => {

    return fetch(`https://fakerapi.it/api/v1/users?_quantity=${number}`)
        .then(checkError);
}

