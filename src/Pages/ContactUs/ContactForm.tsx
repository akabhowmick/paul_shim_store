import { contactFormId } from "../../utils/ApiKeys";
import "./Contact.css";

export const ContactForm = () => {
  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
    { name: "Message", label: "message" },
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
          required
        />
      </div>
    );
  });

  const productOptions = ["Gums", "Lollipops"];

  const selectClasses = (
    <div className="contact-form-div">
      <label htmlFor="design_of_interest">Candy of Interest</label>
      <select className="contact-form-input" id="design_of_interest" name="design_of_interest">
        {productOptions.map((className) => {
          return <option key={className} value={className} label={className}></option>;
        })}
      </select>
    </div>
  );

  return (
    <form action={contactFormId}>
      <h4>Get in touch!</h4>
      <div className="contact__form-container">
        <input type="text" name="_honey" style={{ display: "none" }} />
        {contactFormInputs}
        {selectClasses}
        <div className="submit-btn-container">
          <button id="contact-submit-btn" type="submit" className="btn btn-primary">
            Send Email
          </button>
        </div>
      </div>
    </form>
  );
};
