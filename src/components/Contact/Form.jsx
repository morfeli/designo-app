import React, { useState, useRef } from "react";
import "./Form.scss";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length === 10;

const Form = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    message: true,
  });

  const [touched, setTouched] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPhoneIsValid = isTenChars(enteredPhone);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredEmailIsValid &&
      enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const onTouchHandler = () => {
    setTouched(true);
  };

  let nameControlClasses = "control";
  if (!formInputValidity.name) {
    nameControlClasses = "invalid";
  }

  let emailControlClasses = "control";
  if (!formInputValidity.email) {
    emailControlClasses = "invalid";
  }

  let phoneControlClasses = "control";
  if (!formInputValidity.phone) {
    phoneControlClasses = "invalid";
  }

  let messageControlClasses = "control";
  if (!formInputValidity.message) {
    messageControlClasses = "invalid";
  }
  return (
    <section className="form__container" onSubmit={confirmHandler}>
      <div className="form__container--textBox">
        <h1 className="form__container--title">Contact Us</h1>
        <p className="form__container--p">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form className="form__container--form">
        <div>
          <label className="form__container--label" htmlFor="name"></label>
          <input
            className={nameControlClasses}
            type="text"
            id="name"
            placeholder="Name"
            ref={nameInputRef}
          />
          {!formInputValidity.name && (
            <p className="invalid-message">Please enter a valid name!</p>
          )}
        </div>
        <div>
          <label className="form__container--label" htmlFor="email"></label>
          <input
            className={emailControlClasses}
            type="email"
            id="email"
            placeholder="Email Address"
            ref={emailInputRef}
          />
          {!formInputValidity.email && (
            <p className="invalid-message">
              Please enter a valid email address!
            </p>
          )}
        </div>
        <div>
          <label className="form__container--label" htmlFor="phone"></label>
          <input
            className={phoneControlClasses}
            type="text"
            id="phone"
            placeholder="Phone"
            ref={phoneInputRef}
          />
          {!formInputValidity.phone && (
            <p className="invalid-message">
              Please enter a valid phone number!
            </p>
          )}
        </div>
        <div>
          <label className="form__container--label" htmlFor="message"></label>
          <input
            className={messageControlClasses}
            type="text"
            id="message"
            placeholder="Your Message"
            ref={messageInputRef}
          />
          {!formInputValidity.message && (
            <p className="invalid-message">Please enter a valid message!</p>
          )}
        </div>

        <button className="form__container--btn" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Form;
