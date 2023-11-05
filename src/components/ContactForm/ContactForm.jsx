import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const isValidEmail = (email) => {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
      email
    );
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <div className="error">
          <span>{capitalizeFirstLetter(field)}</span> is a required field!
        </div>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value))
          return <div className="error">Invalid Email</div>;
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    let isValided = false;
    e.preventDefault();

    if (
      contactData.name === "" ||
      contactData.name === undefined ||
      contactData.email === "" ||
      contactData.email === undefined ||
      contactData.message === "" ||
      contactData.message === undefined
    ) {
      setSuccessMsg(false);
      isValided = false;
    } else {
      setSuccessMsg(true);
      isValided = true;
    }
    return isValided;
  };

  return (
    <div id="contact">
      <div className="form">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {!successMsg ? (
            <>
              <div id="errormessage" className={errorMsg ? "show" : ""}>
                {errorMsg}
              </div>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={contactData.name || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={contactData.email || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="message"
                  placeholder="Message"
                  value={contactData.message || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  rows="3"
                />
              </div>
              <p className="text-right mb-0">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit Now"
                />
              </p>
            </>
          ) : (
            <div className="show" id="sendmessage">
              Thank for your message. We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
