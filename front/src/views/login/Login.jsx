import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import loginValidation from "../../validations/loginValidations";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, loggin } from "../../reducers/users/userSlice";
import styles from "./Login.module.css";

export default function Login() {
  const user = useSelector((state) => state.user);
  const login = user.loggin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={loginValidation}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await axios.post(
            "http://localhost:3000/user/login",
            values
          );
          console.log(response.data);
          dispatch(setUser(response.data.user));
          dispatch(loggin());
          alert(`username ${values.username} autentificado`);

          resetForm();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <div>
          <hr />
          <div className={styles.formularioContainer}>
            <Form className={styles.formulario}>
              <label htmlFor="username" className={styles.formulariolabel}>
                Usuario:
              </label>
              <Field
                id="username"
                className={styles.formularioinput}
                type="text"
                name="username"
                placeholder="Roberto carlos"
                required
              />
              <br />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "violet" }}
              />
              <br />

              <label htmlFor="password" className={styles.formulariolabel}>
                Contraseña:
              </label>
              <Field
                id="password"
                className={styles.formularioinput}
                type="password"
                name="password"
                placeholder="******"
                required
              />
              <br />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "violet" }}
              />
              <br />

              <button
                type="submit"
                className={styles.formulariobutton}
                disabled={isSubmitting || login}
              >
                Ingresar
              </button>
            </Form>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </Formik>
  );
}
