import Trees from "./images/trees.jpg";
import { useState } from "react";

const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmittedMsg = () => {
    return <p className="submitMessage">Messge sent, thank you!</p>;
  };

  return (
    <section id="contact" className="section section__contact">
      <div className="container contact__container">
        <div className="contact__side contact__side--left">
          <img src={Trees} alt="trees" />
          <div className="text-box">
            <h2 className="heading__secondary">lets get in touch</h2>
            <p className="paragraph">
              Ready to kickstart my journey as a web developer! Excited to
              learn, grow, and contribute to innovative projects. Reach out to
              discuss how I can bring fresh perspectives and enthusiasm to your
              team!
            </p>
          </div>
        </div>
        <div className="contact__side contact__side--right">
          <h2 className="heading__secondary">Contact</h2>
          <form
            className="contact__form"
            onSubmit={(e) => e.preventDefault()}
            netlify
          >
            <label htmlFor="name">name</label>
            <input id="name" type="text" placeholder="Name" required />
            <label htmlFor="subject">subject</label>
            <input type="text" placeholder="Subject" required />
            <label htmlFor="textbox">message box</label>
            <textarea
              name="textbox"
              placeholder="your message here"
              onSubmit={(e) => e.target.value === ""}
              required
            ></textarea>
            <input
              type="submit"
              aria-label="button"
              href="mailto:adrian.le1995@gmail.com"
              onSubmit={() => setFormSubmit(true)}
            />
          </form>
          {formSubmit === false && ""}
          {formSubmit === true && handleSubmittedMsg()}
        </div>
      </div>
    </section>
  );
};

export default Contact;
