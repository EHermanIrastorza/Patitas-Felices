export default function loginValidation({ password, username }) {
  const regexLetras = /(?=.*[A-Za-z])/;

  const errors = {};

  if (!username) {
    errors.username = "Username is required";
  }

  if (!password) {
    errors.password = "password is required";
  }

  return errors;
}
