
import { useFormik } from 'formik';
import { schema } from './Schema/ValidationSchema';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      expDateM: '',
      expDateY: '',
      cvc: ''
    },
    validationSchema: schema,
    onSubmit
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values)
  }

  return (
    <div className="app-container">
      <Header values={values} />
      <Form 
        values={values} 
        errors={errors} 
        touched={touched} 
        isSubmitting={isSubmitting} 
        handleChange={handleChange} 
        handleBlur={handleBlur}
        handleSubmit={handleSubmit} 
        onSubmit={onSubmit} />     
    </div>
  );
}

export default App;
