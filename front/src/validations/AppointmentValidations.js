export default function appointmentValidations({
  date,
  time,
  description,
  userId,
}) {
  const regexEmail = /\$+@\S+\.\S+/;
  const regexLetras = /(?=.*[A-Za-z])/;
  const regexNumeros = /(?=.*\d)/;
  const regexEspeciales = /(?=.*[@$!%*?&#])/;
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const errors = {};

  if (!date) {
    errors.date = "Date is required";
  } else {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      errors.date = "Date format should be YYYY-MM-DD";
    } else {
      const inputDate = new Date(date);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      const limitDate = new Date();
      limitDate.setDate(today.getDate() + 14);

      if (inputDate < today || inputDate > limitDate) {
        errors.date = "La fecha debe estar entre Mañana y 14 días!";
      }
    }

    if (!time) {
      errors.time = "Time is required";
    } else {
      const validTimes = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
      ];

      if (!validTimes.includes(time)) {
        errors.time =
          "Time must be between 09:00 and 17:30 in 30-minute intervals";
      }
    }

    if (!description) {
      errors.description = "description is required";
    }
    return errors;
  }
}
