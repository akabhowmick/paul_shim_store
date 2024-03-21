import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";


// upload on firebase and then send link to christian
const serviceId = "";
const templateId = "";
const publicKey = "";

export const ContactForm = () => {
  const [buttonState, setButtonState] = useState("Send Message");

  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      reply_to: "", // user email
      message: "", // message of email
      design_of_interest: "", //class that user wants to ask about
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
      design_of_interest: Yup.string().required(
        "* Picking a class wil help us give you the most relevant information"
      ),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setButtonState("Sending Email");
      try {
        emailjs.send(serviceId, templateId, values, publicKey).then(() => {
          setButtonState("Send Email");
          setSubmitting(false);
          resetForm();
        });
      } catch {
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });

  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
    { name: "Message", label: "message" },
  ];

  // allows the input to have access to correct formik values
  const getFormikValues = (label: string) => {
    if (label === "from_name") {
      return formik.values.from_name;
    } else if (label === "reply_to") {
      return formik.values.reply_to;
    } else if (label === "message") {
      return formik.values.message;
    } else if (label === "design_of_interest") {
      return formik.values.design_of_interest;
    }
    return "";
  };

  // allows access to the error message in formik
  const getFormikErrors = (label: string) => {
    if (label === "from_name") {
      return formik.errors.from_name;
    } else if (label === "reply_to") {
      return formik.errors.reply_to;
    } else if (label === "message") {
      return formik.errors.message;
    } else if (label === "design_of_interest") {
      return formik.errors.design_of_interest;
    }
    return "";
  };

  const contactFormInputs = contactFormInput.map(({ name, label }) => {
    return (
      <div key={name} className="contact-form-div">
        <label htmlFor={label}>{name}</label>
        <input
          className="contact-form-input"
          id={label}
          name={label}
          type="text"
          autoComplete="off"
          placeholder={`Your ${name}`}
          onChange={formik.handleChange}
          value={getFormikValues(label)}
        />
        {formik.submitCount > 0 && getFormikErrors(label) && (
          <div className="expandable show">{getFormikErrors(label)}</div>
        )}
      </div>
    );
  });

  const classOptions = [
    "Little Tiger (2-5)",
    "Children (6-9)",
    "Pre-Teen (10-13)",
    "Advanced Teen (14-17)",
    "Adults (18+)",
    "Kpop Dance Class (6+)",
  ];

  const selectClasses = (
    <div className="contact-form-div">
      <label htmlFor="design_of_interest">Class Of Interest</label>
      <select
        className="contact-form-input"
        id="design_of_interest"
        name="design_of_interest"
        onChange={formik.handleChange}
        value={getFormikValues("design_of_interest")}
      >
        {classOptions.map((className) => {
          return <option key={className} value={className} label={className}></option>;
        })}
      </select>
      {formik.submitCount > 0 && getFormikErrors("design_of_interest") && (
        <div className="expandable show">{getFormikErrors("design_of_interest")}</div>
      )}
    </div>
  );

  return (
    <form className="formcontact" onSubmit={formik.handleSubmit}>
      <div className="form-row-1">
        {contactFormInputs}
        {selectClasses}
        <div className="col-12">
          <button
            id="contact-submit-btn"
            disabled={formik.isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            <span>{buttonState}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
