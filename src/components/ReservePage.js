import React, { useReducer, useEffect } from 'react';
import tableImg from "../assets/table.jpg"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../api';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const ValidationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Date is required')
    .nullable(),

  time: Yup.string()
    .required('Time is required'),

  guests: Yup.number()
    .typeError('Must be a number') 
    .required('Number of people is required')
    .positive('Must be a positive number') 
    .integer('Must be an integer'), 
});

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

export const initializeTimes = (date) => {
  return fetchAPI(date);
};

const ReservePage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const today = new Date(); 
      const initialTimes = initializeTimes(today); 
      dispatch({ type: 'SET_TIMES', payload: initialTimes });
    };

    fetchInitialTimes();
  }, []);

  const updateTimes = (selectedDate) => {
    const times = initializeTimes(new Date(selectedDate));
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  const handleSubmit = async (values) => {
    const success = submitAPI(values);
    if (success) {
      navigate("/booking-confirmed")
    } else {
      console.log('Form submission failed');
    }
  };

  return (
    <>
    <Header/>
    <main>
      <section className="table_hero">
        <h1>Table reservation</h1>
        <div className="img_container">
          <img src={tableImg} />
        </div>
      </section>
      <section className="form_container">
      <Formik
  initialValues={{
    date: '',
    time: '',
    guests: '',
    occasion: 'none',
  }}
  validationSchema={ValidationSchema}
  onSubmit={handleSubmit}
>
  {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, isValid }) => (
    <Form onSubmit={handleSubmit}>
      <div className="form_field">
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          data-testid="date"
          name="date"
          value={values.date}
          onChange={(e) => {
            handleChange(e);
            updateTimes(e.target.value);
          }}
          onBlur={handleBlur}
          style={{
            border: touched.date && errors.date ? '2px solid red' : '',  
          }}
        />
        <ErrorMessage name="date" component="div" className="error" />
      </div>

      <div className="form_field">
        <label htmlFor="time">Choose time</label>
        <Field
              as="select"
              id="time"
              data-testid="time"
              name="time"
              style={{
                border: touched.time && errors.time ? '2px solid red' : '',  
              }}
            >
              <option value="" label="Select a time" />
              {availableTimes.map(time => (
                <option key={time} value={time} label={time} />
              ))}
            </Field>
        <ErrorMessage name="time" component="div" className="error" />
      </div>

      <div className="form_field">
        <label htmlFor="guests">How many people?</label>
        <input
          placeholder="1" min="1" max="10"
          type="number"
          id="guests"
          data-testid="guests"
          name="guests"
          value={values.guests}
          onChange={(e) => {
            const value = Math.max(0, Math.min(e.target.value, 10));
            handleChange({ target: { name: e.target.name, value } });
          }}
          onBlur={handleBlur}
          style={{
            border: touched.guests && errors.guests ? '2px solid red' : '',
          }}
        />
        <ErrorMessage name="guests" component="div" className="error" />
      </div>

      <div className="form_field">
        <label htmlFor="occasion">Special occasion?</label>
        <select
          id="occasion"
          data-testid="occasion"
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: touched.occasion && errors.occasion ? '2px solid red' : '',
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <ErrorMessage name="occasion" component="div" className="error" />
      </div>

      <button type="submit" data-testid="submit" name='submit' disabled={isSubmitting || !isValid} aria-label="On Click">
        Submit
      </button>
    </Form>
  )}
</Formik>

      </section>
    </main>
    <Footer/>
    </>
  )
};

export default ReservePage;
