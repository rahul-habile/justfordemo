export const validateName = (name) => {
    return name.length > 0;
  };
  
  export const validateUsername = (username) => {
    return /^[a-zA-Z0-9]+$/.test(username);
  };
  
  export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };