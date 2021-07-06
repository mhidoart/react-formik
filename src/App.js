import logo from './logo.svg';
import './App.css';
import { useFormik } from "formik";
import * as Yup from 'yup';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = " le champ email est obligatoire!";
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = " email doit etre comme exemple@exemple.com";

      }


      if (!values.password) {
        errors.password = " le champ password est obligatoire!";
      } else if (values.password.length < 6) {
        errors.password = " le champ password doit contenir au moins 6 charactères!";
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
    }

  });

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto" >
          <div className="card p-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="invalid-feedback d-block">{formik.touched.email && formik.errors.email}</div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" type="password" className="form-control" id="password" />
                <div id="emailHelp" className="invalid-feedback d-block">{formik.touched.password && formik.errors.password}</div>

              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
