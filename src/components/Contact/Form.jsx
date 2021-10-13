import React from "react";

const Form = () => {
  return (
    <section>
      <div>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Email</label>
          <input type="text" id="phone" />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <input type="text" id="message" />
        </div>
      </form>
    </section>
  );
};

export default Form;
