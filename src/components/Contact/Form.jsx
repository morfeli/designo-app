import React, { useState, useRef } from "react";
import "./Form.scss";

const Form = () => {
  return (
    <section className="form__container">
      <h1 className="form__container--title">Contact Us</h1>
      <p className="form__container--p">
        Ready to take it to the next level? Let’s talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that’s relatable to your users, drop us a
        line.
      </p>

      <form className="form__container--form">
        <div className="form__container--box">
          <label className="form__container--label" htmlFor="name"></label>
          <input
            className="form__container--input"
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="form__container--label" htmlFor="email"></label>
          <input
            className="form__container--input"
            type="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label className="form__container--label" htmlFor="phone"></label>
          <input
            className="form__container--input"
            type="text"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div>
          <label className="form__container--label" htmlFor="message"></label>
          <input
            className="form__container--input"
            type="text"
            id="message"
            placeholder="Your Message"
          />
        </div>

        <button className="form__container--btn" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Form;
