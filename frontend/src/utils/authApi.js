export const BASE_URL = 'https://api.mixer0000.nomoredomainsmonster.ru';
// export const BASE_URL = 'http://localhost:3000'; - поменять на него для локального запуска с бэкэндом на 3000 порте

const getRequest = (url, options) => {
  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          const errorMessage = errorData.message || 'Request failed';
          const errorWithStatus = new Error(errorMessage);
          errorWithStatus.status = response.status;
          throw errorWithStatus;
        });
      }
    })
};

export const register = (password, email) => {
  return getRequest(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
};

export const authorize = (password, email) => {
  return getRequest(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
};

export const getContent = () => {
  return getRequest(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
};

