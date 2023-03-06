export const createUserInLocalStorage = (user) => {
    localStorage.setItem(user.username, JSON.stringify(user));
  };
  
  export const getUserFromLocalStorage = (username) => {
    const user = localStorage.getItem(username);
    return user ? JSON.parse(user) : null;
  };