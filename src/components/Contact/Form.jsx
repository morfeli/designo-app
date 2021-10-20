import React, { useState, useRef, useEffect } from "react";
import "./styles/Form.scss";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length === 10;

const Form = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    message: true,
  });

  const [touchedName, setTouchedName] = useState("");
  const [touchedEmail, setTouchedEmail] = useState("");
  const [touchedPhone, setTouchedPhone] = useState("");
  const [touchedMessage, setTouchedMessage] = useState("");

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

  const onTouchNameHandler = (e) => {
    setTouchedName(e.target.value);
  };
  const onTouchEmailHandler = (e) => {
    setTouchedEmail(e.target.value);
  };
  const onTouchPhoneHandler = (e) => {
    setTouchedPhone(e.target.value);
  };
  const onTouchMessageHandler = (e) => {
    setTouchedMessage(e.target.value);
  };

  let invalidNameControl = "invalid-message";
  let invalidEmailControl = "invalid-message";
  let invalidPhoneControl = "invalid-message";
  let invalidMessageControl = "invalid-message";

  let nameControlClasses = "control";
  if (!formInputValidity.name) {
    nameControlClasses = "invalid";
  }
  if (!formInputValidity.name && touchedName) {
    nameControlClasses = "control";
    invalidNameControl = "valid-message";
  }

  let emailControlClasses = "control";
  if (!formInputValidity.email) {
    emailControlClasses = "invalid";
  }
  if (!formInputValidity.email && touchedEmail) {
    emailControlClasses = "control";
    invalidEmailControl = "valid-message";
  }

  let phoneControlClasses = "control";
  if (!formInputValidity.phone) {
    phoneControlClasses = "invalid";
  }
  if (!formInputValidity.phone && touchedPhone) {
    phoneControlClasses = "control";
    invalidPhoneControl = "valid-message";
  }

  let messageControlClasses = "control";
  if (!formInputValidity.message) {
    messageControlClasses = "invalid";
  }
  if (!formInputValidity.message && touchedMessage) {
    messageControlClasses = "control";
    invalidMessageControl = "valid-message";
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
            onChange={onTouchNameHandler}
          />
          {!formInputValidity.name && (
            <p className={invalidNameControl}>Please enter a valid name!</p>
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
            onChange={onTouchEmailHandler}
          />
          {!formInputValidity.email && (
            <p className={invalidEmailControl}>
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
            onChange={onTouchPhoneHandler}
          />
          {!formInputValidity.phone && (
            <p className={invalidPhoneControl}>
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
            onChange={onTouchMessageHandler}
          />
          {!formInputValidity.message && (
            <p className={invalidMessageControl}>
              Please enter a valid message!
            </p>
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
