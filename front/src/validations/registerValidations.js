export default function validateUser({
  name,
  email,
  birthdate,
  nDni,
  password,
  username,
}) {
  const regexEmail = /\$+@\S+\.\S+/;
  const dniRegex = /^\d{8}$/;
  const regexLetras = /(?=.*[A-Za-z])/;
  const regexNumeros = /(?=.*\d)/;
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const regexEspeciales = /(?=.*[@$!%*?&#])/;
  const regexName = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
  const errors = {};

  if (!name) {
    errors.name = "Name is required";
  } else {
    if (!regexName.test(name)) {
      errors.name = "Nombre debe tener minusculas y mayusculas";
    } else {
      if (name.length < 3 || name.length > 30) {
        errors.name = "el nombre debe tener más de 3 digitos y menos de 30";
      }
    }
  }

  if (!email) {
    errors.email = "Email is required";
  } else {
    if (!emailRegex.test(email)) {
      errors.email = "Debe ser un Email con caracteres validos";
    }
  }

  if (!birthdate) {
    errors.birthdate = "Birthday is required";
  }

  if (!nDni) {
    errors.nDni = "nº DNI is required";
  } else {
    if (!dniRegex.test(nDni)) {
      errors.nDni = "Debe contener 8 numeros";
    } else {
      if (typeof nDni === "string" || isNaN(nDni)) {
        errors.nDni = "El DNI debe ser un número y no una cadena de texto.";
      }
    }
  }

  if (!password) {
    errors.password = "Password is required";
  } else {
    if (!regexLetras.test(password)) {
      errors.password = "Nombre debe tener minusculas y mayusculas";
      if (!regexEspeciales.test(password)) {
        errors.password = "debe incluir caracteres especiales";
      }
    }
  }
  if (!username) {
    errors.username = "Username is required";
  } else {
    if (!regexLetras.test(username)) {
      errors.username = "Nombre debe tener minusculas y mayusculas";
    }
  }
  return errors;
}
