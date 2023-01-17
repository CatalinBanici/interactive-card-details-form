import MainDesktop from './Assets/images/bg-main-desktop.png';
import CardFront from './Assets/images/bg-card-front.png';
import CardBack from './Assets/images/bg-card-back.png';
import { useFormik } from 'formik';
import { schema } from './Schema/ValidationSchema';

function App() {

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
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

  function onSubmit() {
    console.log('Submitted!')
  }

  console.log(values)
  // console.log(errors)

  return (
    <div className="app-container">
      <header className='header-container'>
        <img className='main-image' src={MainDesktop} alt='main' />
        <div className='card-img-container'>
          <span className='on-card-name'>{values.cardName || 'Jane Appleseed'}</span>
          <span className='on-card-number'>{values.cardNumber || '0000 0000 0000 0000'}</span>
          <span className='on-card-exp-m'>{values.expDateM || '00'}</span>
          <span className='slash'>/</span>
          <span className='on-card-exp-y'>{values.expDateY || '00'}</span>
          <span className='cvc-on-card'>{values.cvc || '000'}</span>
          <svg className='card-logo' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
            <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/>
          </svg>
          <img className='card-front' src={CardFront} alt='front card' />
          <img className='card-back' src={CardBack} alt='back card' />   
        </div>
      </header>
      
      <form className='form-container' onSubmit={handleSubmit} >
        <label className='cardholder-name label'>
          CARDHOLDER NAME
          <input 
            className='input-cardholder-name' 
            style={errors.cardName && touched.cardName && {border: '1px solid red'}}
            type='text' 
            id='cardName'
            placeholder='e.g. Jane Appleseed'
            value={values.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cardName && touched.cardName && <span className='error-message'>{errors.cardName}</span>}
        </label>

        <label className='card-number label'>
          CARD NUMBER
          <input 
            className='input-card-number'
            style={errors.cardNumber && touched.cardNumber && {border: '1px solid red'}}
            type='text' 
            id='cardNumber' 
            placeholder='e.g. 1234 5678 9123 0000'
            value={values.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cardNumber && touched.cardNumber && <span className='error-message'>{errors.cardNumber}</span>}
        </label>
        
        <div className='exp-cvc-container'>
          <label className='card-exp label'>
            EXP. DATE (MM/YY)
            <div>
              <input 
                className='input-exp-date-m'
                style={errors.expDateM && touched.expDateM && {border: '1px solid red'}}
                type='text'  
                id='expDateM'
                placeholder='MM'
                value={values.expDateM}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input 
                className='input-exp-date-y'
                style={errors.expDateY && touched.expDateY && {border: '1px solid red'}}
                type='text' 
                id='expDateY'
                placeholder='YY'
                value={values.expDateY}
                onChange={handleChange}
                onBlur={handleBlur}
              /> 
              {errors.expDateM && errors.expDateY && touched.expDateM && touched.expDateY &&  <span className='error-message error-message-exp'>{errors.expDateM && errors.expDateY}</span>} 
            </div>       
          </label>
          
          <label className='cvc label'>
              CVC
              <input
                className='input-cvc'
                style={errors.cvc && touched.cvc && {border: '1px solid red'}}
                type='text'
                id='cvc' 
                placeholder='123'
                value={values.cvc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cvc && touched.cvc && <span className='error-message'>{errors.cvc}</span>}
          </label>       
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
