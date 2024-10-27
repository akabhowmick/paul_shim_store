// import { socialButtons } from "../../utils/SocialMediaLink";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  // const socialMediaButtons = socialButtons.map((button, index) => {
  //   return <div key={index}>{button}</div>;
  // });

  return (
    <div className="contact-page">
      <h2 className="page-header">Contact Us!</h2>
      <h3 className="page-subheader">
        Fill out the page below and we will reach out to you as soon as possible
      </h3>
      <div className="form-container-with-social">
        {/* <div className="social-container">
          <h4>Come check out on our other social media pages!</h4>
          <div className="contact-links">{socialMediaButtons}</div>
        </div> */}
        <ContactForm />
      </div>
    </div>
  );
};
