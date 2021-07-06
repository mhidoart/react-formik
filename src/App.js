import logo from './logo.svg';
import './App.css';
import { useFormik } from "formik";
import * as Yup from 'yup';

function App() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Email non valide").required("le champ email est obligatoire"),
    password: Yup.string().min(6, "password doit contenir au moins 6 charactères").required("le champ password est obligatoire")
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
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
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="invalid-feedback d-block">{formik.touched.email && formik.errors.email}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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
