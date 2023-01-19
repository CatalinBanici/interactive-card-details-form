import { useFormik } from "formik";
import { schema } from "./Schema/ValidationSchema";
import Header from "./Components/Header";
import Form from "./Components/Form";
import { Route, Routes, useNavigate } from "react-router-dom";
import Complete from "./Components/Complete";

function App() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expDateM: "",
      expDateY: "",
      cvc: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  const navigate = useNavigate();

  async function onSubmit(values, actions) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    navigate("/Complete");
    actions.resetForm();
  }

  return (
    <div className="app-container">
      <Header values={values} />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              values={values}
              errors={errors}
              touched={touched}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          }
        />
        <Route path="/Complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
