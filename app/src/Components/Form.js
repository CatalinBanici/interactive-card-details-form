import React from "react";

export default function Form(props) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="cardholder-name label">
        CARDHOLDER NAME
        <input
          className="input-cardholder-name"
          style={
            errors.cardName && touched.cardName && { border: "1px solid red" }
          }
          type="text"
          id="cardName"
          placeholder="e.g. Jane Appleseed"
          value={values.cardName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.cardName && touched.cardName && (
          <span className="error-message">{errors.cardName}</span>
        )}
      </label>

      <label className="card-number label">
        CARD NUMBER
        <input
          className="input-card-number"
          style={
            errors.cardNumber &&
            touched.cardNumber && { border: "1px solid red" }
          }
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="16"
          value={values.cardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.cardNumber && touched.cardNumber && (
          <span className="error-message">{errors.cardNumber}</span>
        )}
      </label>

      <div className="exp-cvc-container">
        <label className="card-exp label">
          EXP. DATE (MM/YY)
          <div>
            <input
              className="input-exp-date-m"
              style={
                errors.expDateM &&
                touched.expDateM && { border: "1px solid red" }
              }
              type="text"
              id="expDateM"
              placeholder="MM"
              maxLength="2"
              value={values.expDateM}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className="input-exp-date-y"
              style={
                errors.expDateY &&
                touched.expDateY && { border: "1px solid red" }
              }
              type="text"
              id="expDateY"
              placeholder="YY"
              maxLength="2"
              value={values.expDateY}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.expDateM &&
            errors.expDateY &&
            touched.expDateM &&
            touched.expDateY && (
              <span className="error-message">
                {errors.expDateM && errors.expDateY}
              </span>
            )}
        </label>

        <label className="cvc label">
          CVC
          <input
            className="input-cvc"
            style={errors.cvc && touched.cvc && { border: "1px solid red" }}
            type="text"
            id="cvc"
            placeholder="123"
            maxLength="3"
            value={values.cvc}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cvc && touched.cvc && (
            <span className="error-message">{errors.cvc}</span>
          )}
        </label>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Processing payment..." : "Confirm"}
      </button>
    </form>
  );
}
