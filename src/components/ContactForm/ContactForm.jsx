// import { useFormik } from "formik";
import s from "./ContactForm.module.css";
// import { withZodSchema } from "formik-validator-zod";
// import { z } from "zod";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const telFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const initialValues = {
    id: "",
    number: "",
    name: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    addContact({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId} className={s.label}>
          Name:
        </label>
        <Field className={s.input} name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />
        <label htmlFor={telFieldId} className={s.label}>
          Number:
        </label>
        <Field
          className={s.input}
          name="number"
          type="number"
          id={telFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
