import { ChangeEvent, useState } from "react";
import "./UploadImage.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, publicKey } from "../../utils/ApiKeys";
import Swal from "sweetalert2";

export const UploadImageForm = () => {
  const [buttonState, setButtonState] = useState("Submit to our designers!");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    console.log(formik.values.image);
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      reply_to: "", // user email
      message: "", // message of email
      order_number: "", // order number
      phone_number: "", // user phone number
      image: "", // image of product
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
      order_number: Yup.string().required(
        "* Using your order number wil help us give you the most relevant information"
      ),
      phone_number: Yup.string()
        .required("* Phone Number is required")
        .matches(/[0-9]{10}/, "Enter your 10 digit phone number with no spaces")
        .max(10, "Only enter 10 digits"),
      image: Yup.string(),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setButtonState("Sending Email");
      try {
        emailjs.send(serviceId, templateId, values, publicKey).then(() => {
          setButtonState("Send Email");
          setSubmitting(false);
          resetForm();
        });
        Swal.fire({
          title: "Thank you!",
          text: "We will be in touch shortly!",
          icon: "success",
        });
      } catch {
        Swal.fire({
          title: "Error!",
          text: "Form was not completed properly!",
          icon: "warning",
        });
        setButtonState("Complete the form to submit!");
        setSubmitting(false);
      }
    },
  });

  // allows the input to have access to correct formik values
  const getFormikValues = (label: string) => {
    if (label === "from_name") {
      return formik.values.from_name;
    } else if (label === "reply_to") {
      return formik.values.reply_to;
    } else if (label === "message") {
      return formik.values.message;
    } else if (label === "order_number") {
      return formik.values.order_number;
    } else if (label === "phone_number") {
      return formik.values.phone_number;
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
    } else if (label === "order_number") {
      return formik.errors.order_number;
    } else if (label === "phone_number") {
      return formik.errors.phone_number;
    }
    return "";
  };

  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
    { name: "Message", label: "message" },
    { name: "Order Number", label: "order_number" },
  ];

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

  const uploadAndDisplayImage = (
    <div className="contact-form-div">
      {selectedImage && (
        <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={handleRemoveImage}>Remove</button>
        </div>
      )}
      <label htmlFor="image">Image</label>
      <input type="file" name="image" onChange={handleImageChange} accept="image/*" id="image" />
    </div>
  );

  return (
    <form className="formcontact" encType="multipart/form-data" onSubmit={formik.handleSubmit}>
      <div className="contact__form-container">
        {contactFormInputs}
        {uploadAndDisplayImage}
        <div className="submit-btn-container">
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
