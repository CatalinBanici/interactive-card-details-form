import MainDesktop from './Assets/images/bg-main-desktop.png';
import CardFront from './Assets/images/bg-card-front.png';
import CardBack from './Assets/images/bg-card-back.png';
import { useFormik } from 'formik';

function App() {

  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      expDateM: '',
      expDateY: '',
      cvc: ''
    },
  });

  console.log(values)

  return (
    <div className="app-container">
      <header className='header-container'>
        <img className='main-image' src={MainDesktop} alt='main' />
        <div className='card-img-container'>
          <span className='on-card-name'></span>
          <span className='on-card-number'></span>
          <span className='on-card-exp-m'></span>
          <span className='slash'></span>
          <span className='on-card-exp-y'></span>
          <span className='cvc-on-card'></span>
          <svg className='card-logo' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
            <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/>
          </svg>
          <img className='card-front' src={CardFront} alt='front card' />
          <img className='card-back' src={CardBack} alt='back card' />   
        </div>
      </header>
      
      <form className='form-container' >
        <label className='cardholder-name label'>
          CARDHOLDER NAME
          <input 
            className='input-cardholder-name'
            type='text' 
            id='cardName'
            required 
            placeholder='e.g. Jane Appleseed'
            value={values.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='error-message-name'></span>
        </label>

        <label className='card-number label'>
          CARD NUMBER
          <input 
            className='input-card-number'
            type='text' 
            id='cardNumber' 
            required 
            placeholder='e.g. 1234 5678 9123 0000'
            value={values.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className='error-message-number'></span>
        </label>
        
        <div className='exp-cvc-container'>
          <label className='card-exp label'>
            EXP. DATE (MM/YY)
            <div>
              <input 
                className='input-exp-date-m'
                type='text'  
                id='expDateM'
                required 
                placeholder='MM'
                value={values.expDateM}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input 
                className='input-exp-date-y'
                type='text' 
                id='expDateY'
                required 
                placeholder='YY'
                value={values.expDateY}
                onChange={handleChange}
                onBlur={handleBlur}
              /> 
              <span className='error-message-exp'></span> 
            </div>       
          </label>
          
          <label className='cvc label'>
              CVC
              <input
                className='input-cvc'
                type='text'
                id='cvc' 
                required  
                placeholder='123'
                value={values.cvc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className='error-message-cvc'></span>
          </label>       
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
