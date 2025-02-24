import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/contact-form.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const defaultFormData = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(defaultFormData);
        setIsSubmitSuccess(true);
      } else {
        setIsSubmitSuccess(false);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setIsSubmitSuccess(false);
    }
  };

  return (
    <section className="form-container">
      <form id="contact-form" onSubmit={(e) => void handleSubmit(e)}>
        <div className="form-field">
          <label htmlFor="form-name">Name</label>
          <input
            id="form-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Austin Powers"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="form-email">Email</label>
          <input
            id="form-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="manofmystery@shagadelic.spy"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="form-message">Message</label>
          <textarea
            id="form-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What we swingers were going against were uptight squares like you whose bag was money and world domination. We were innocent, man. If we had known the consequences of our sexual liberation, we would've done things much differently but the spirit would remain the same. It's freedom, baby."
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitSuccess != null && (
        <div className={`post-submit-container ${isSubmitSuccess ? 'success' : 'failure'}`}>
          {isSubmitSuccess ? (
            <p className="post-submit-text success">
              Thanks for reaching out! I shall get back to you in a jiffy.
            </p>
          ) : (
            <p className="post-submit-text failure">
              Oops, looks like I did a boo-boo, your message is not being delivered. Maybe refresh
              the page or try again later? Pretty please?
            </p>
          )}
        </div>
      )}
    </section>
  );
}
