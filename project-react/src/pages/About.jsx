import "../css/About.css";
import { useState } from "react";

const About = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8bb4245c-6735-4353-887e-ffad510d947d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="page">
      <h2>About Us</h2>

      <main className="container band-dark about-wrap">
        {/* About Section */}
        <section className="about-left band-brown">
          <h3>About Us:</h3>
          <p>
            Astora’s Archive was born as a passion project created out of love and admiration 
            for Dark Souls III and the community that surrounds it. Our goal has always been to 
            build a space that connects long-time fans with newcomers, celebrating the stories, 
            challenges, and creativity that make this game timeless. Every page of this archive is 
            shaped by respect for the artistry of FromSoftware and by the enthusiasm of players who
            continue to keep the flame alive. More than just a guide, this site is a tribute to the bonds 
            formed through struggle, perseverance, and shared discovery.
          </p>
        </section>

        {/* Contact Section */}
        <section id ="contact-form" className="about-left band-brown">
          <h3>Contact Us</h3>
          <p><strong>Phone Number:</strong> 000-000-0000</p>
          <p><strong>Email:</strong> someone123@gmail.com</p>

          <div id ="contact-form">
            <form onSubmit={onSubmit}>
              <input type="text" name="name" required />
              <input type="email" name="email" required />
              <textarea name="message" required></textarea>

              <button type="submit">Submit Form</button>
            </form>
            <span>{result}</span>
          </div>
        </section>

        {/* Location Section */}
        <aside className="about-left band-brown">
          <h3>Our Location:</h3>
          <p>University of South Carolina, Columbia, SC</p>

          <h3>Mailing Address:</h3>
          <p>123 Main St, Columbia, SC 29201</p>
        </aside>

        {/* Embedded Google Map */}
        <section className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.646913287493!2d-81.03773578478057!3d33.99854092890898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb52f88e45ab%3A0x3b2d32f9a5ddad5e!2sUniversity%20of%20South%20Carolina!5e0!3m2!1sen!2sus!4v1695832222222!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Location map"
          ></iframe>
        </section>
      </main>
    </section>
  );
};

export default About;
