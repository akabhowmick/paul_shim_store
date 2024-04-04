import "./UploadImage.css";
import { imageUploadFormId, publicUploadcareId, thankYouPage } from "../../utils/ApiKeys";
import { useEffect } from "react";
import { useCartContext } from "../../providers/CartProvider";

export const UploadImageForm = () => {
  const { setCart } = useCartContext();

  const uploadAndDisplayImage = (
    <div className="contact-form-div">
      <label htmlFor="Image-for-Customization">Image for Customization</label>
      <input
        type="hidden"
        id="Image-for-Customization"
        name="Image-for-Customization"
        role="uploadcare-uploader"
        data-public-key={publicUploadcareId}
      />
    </div>
  );

  useEffect(() => {
    setCart([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          required
        />
      </div>
    );
  });

  return (
    <form className="formcontact" action={imageUploadFormId}>
      <div className="contact__form-container">
        <input type="hidden" name="_redirect" value={thankYouPage} />
        {contactFormInputs}
        {uploadAndDisplayImage}
        <div className="submit-btn-container">
          <button id="contact-submit-btn" type="submit" className="btn btn-primary">
            <span>Submit to our designers!</span>
          </button>
        </div>
      </div>
    </form>
  );
};
