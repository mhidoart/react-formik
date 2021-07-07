import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { Component } from 'react';
import * as Yup from 'yup';

function App() {

  const initialValues = {
    email: "",
    password: "",
    adresses: {
      adresse1: "49,Jean Rostand",
      adresse2: "72 000 , Paris"
    },
    socials: ["", "", ""],
    bio: "",
    city: "",
    gender: "",
    bloodType: ""

  }
  //select options:
  const options = [
    { key: "veuiller selectionner une ville  ", value: "" },
    { key: "Taza", value: "taza" },
    { key: "Fes ", value: "fes" },
    { key: "Rabat  ", value: "rabat" }

  ]
  //radiobox options:
  const radioOptions = [
    { key: "Male", value: "M" },
    { key: "Femelle", value: "F" },
    { key: "Autre", value: "XYZ" }

  ]

  //chackbox options:
  const bloodTypeOptions = [
    { key: "A", value: "a" },
    { key: "B", value: "b" },
    { key: "AB", value: "ab" },
    { key: "O", value: "o" },

    { key: "A+", value: "a+" },
    { key: "B+", value: "b+" },
    { key: "AB+", value: "ab+" },
    { key: "O+", value: "o+" },

    { key: "A-", value: "a-" },
    { key: "B-", value: "b-" },
    { key: "AB-", value: "ab-" },
    { key: "O-", value: "o-" }


  ]

  //if u want to initialise the form with data 
  const userData = {
    email: "azdef@pnn.com",
    password: "azerty12",
    adresses: {
      adresse1: "49, Rue yenkens",
      adresse2: "72 000 , new york "
    },
    socials: ["", "", ""]

  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Email non valide").required("le champ email est obligatoire"),
    password: Yup.string().min(6, "password doit contenir au moins 6 charactères").required("le champ password est obligatoire"),
    adresse1: Yup.string().min(6, "donnez au moin le numero de la rue et la vile"),
    bio: Yup.string().required().min(6, "champ bio est obligatoir"),
    city: Yup.string().required(" le champ ville est obligatoir"),
    gender: Yup.string().required("le champs sexe est obligatoir")







  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  }


  return (
    <Formik

      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validationOnMount
      enableReinitialize
    >
      {
        formik => (

          <div className="container">
            <div className="row my-4">
              <div className="col-md-8 mx-auto" >
                <div className="card p-2">
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <Field name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="invalid-feedback d-block">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Field name="password" type="password" className="form-control" id="password" />
                      <div id="emailHelp" className="invalid-feedback d-block">
                        <ErrorMessage name="password" />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label htmlFor="adresse1" className="form-label">adresse 1</label>
                      <Field name="adresses.adresse1" type="text" className="form-control" placeholder={initialValues.adresses.adresse1} id="adresse1" />
                      <div id="adresse1_help" className="invalid-feedback d-block">
                        <ErrorMessage name="adresse1" />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label htmlFor="adresse2" className="form-label">Adresse 2</label>
                      <Field name="adresses.adresse2" type="text" className="form-control" placeholder={initialValues.adresses.adresse2} id="adresse2" />
                      <div id="adresse2_help" className="invalid-feedback d-block">
                        <ErrorMessage name="adresse2" />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label htmlFor="adresse1" className="form-label">Facebook</label>
                      <Field name="socials[0]" type="text" className="form-control" id="adresse1" />
                      <div id="adresse1_help" className="invalid-feedback d-block">
                        <ErrorMessage name="socials[0]" />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label htmlFor="adresse2" className="form-label">Linkedin</label>
                      <Field name="socials[1]" type="text" className="form-control" id="adresse2" />
                      <div id="adresse2_help" className="invalid-feedback d-block">
                        <ErrorMessage name="socials[1]" />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label htmlFor="adresse2" className="form-label">Biographie</label>
                      <Field
                        as="textarea"
                        cols="30"
                        rows="5"
                        name="bio" className="form-control" id="bio" />
                      <div id="bio" className="invalid-feedback d-block">
                        <ErrorMessage name="bio" />
                      </div>

                    </div>


                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">ville</label>
                      <Field
                        as="select"
                        name="city" className="form-control" id="city"
                        options={options}
                      >
                        {
                          options.map(option => {
                            return (
                              <option forhtml="city" key={option.value} value={option.value} >{option.key}</option>
                            );
                          })
                        }


                      </Field>
                      <div id="adresse2_help" className="invalid-feedback d-block">
                        <ErrorMessage name="city" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">Sexe</label>
                      <br></br>

                      <Field
                        as="select"
                        name="gender" className="form-check-input" id="gender"
                        options={radioOptions}
                      >
                        {
                          ({ field }) => {
                            return radioOptions.map(option => {
                              return (
                                <React.Fragment key={option.key} >
                                  <input className="px-3"
                                    {...field}
                                    type="radio"
                                    id={option.value}
                                    value={option.value}
                                    checked={field.value === option.value}

                                  />
                                  <label htmlFor="gender" className="form-label px-2">{option.key}</label>

                                </React.Fragment>
                              );
                            });
                          }
                        }


                      </Field>
                      <div id="gender" className="invalid-feedback d-block">
                        <ErrorMessage name="gender" />
                      </div>
                    </div>


                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">Song donation</label>
                      <br></br>

                      <Field
                        as="select"
                        name="bloodType" className="form-check-input" id="bloodType"
                        options={bloodTypeOptions}
                      >
                        {
                          ({ field }) => {
                            return bloodTypeOptions.map(option => {
                              return (
                                <React.Fragment key={option.key} >
                                  <input className="px-3"
                                    {...field}
                                    type="checkbox"
                                    id={option.value}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}

                                  />
                                  <label htmlFor="bloodType" className="form-label px-2">{option.key}</label>

                                </React.Fragment>
                              );
                            });
                          }
                        }


                      </Field>
                      <div id="bloodType" className="invalid-feedback d-block">
                        <ErrorMessage name="bloodType" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                      disabled={!formik.isValide && !formik.dirty}>Submit</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Formik>
  );
}

export default App;
