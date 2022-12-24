import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const initialFormValues = { name: "", email: "", address: "" };

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  email: yup.string().email("invalid email").required("Required"),
  address: yup.string().required("Required!"),
});

export default function CartSubmitForm({ confirmHandler }) {
  // take submitted values and reset form
  // pass values to the parent component cart. send values from there.

  const submitHandler = (values, actions) => {
    confirmHandler(values);
    actions.resetForm(initialFormValues);
  };

  return (
    <div id="form-section" className="my-8 bg-yellow-200 p-4">
      <div id="form-header" className="font-bold text-lg">
        Add details and comfirm order please!
      </div>
      <Formik
        initialValues={initialFormValues}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        {({ values, errors, touched }) => (
          <Form className="form">
            <label htmlFor="name">Fullname</label>
            <Field name="name" type="text" placeholder="John" />
            {touched.name && <pre className="text-red-700">{errors.name}</pre>}
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="john@email.com" />
            {touched.email && (
              <pre className="text-red-700">{errors.email}</pre>
            )}
            <label htmlFor="address">Address</label>
            <Field
              name="address"
              type="address"
              placeholder="house-no. 2, road-no 1, city-name"
            />
            {touched.address && (
              <pre className="text-red-700">{errors.address}</pre>
            )}
            <button type="submit" className="button-brown">
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
