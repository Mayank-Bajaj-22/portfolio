import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown) {
      alert("⏳ Please wait before sending another message.");
      return;
    }
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        "service_uh3k0gd",
        "template_ye63v44", //
        formRef.current,
        "GMGQViXZl9HteBvCl" //
      );

      // Reset form and stop loading
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setCooldown(true);
      setTimeout(() => setCooldown(false), 60000);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex items-center justify-center px-0 md:px-10 md:mt-40 mt-20 "
    >
      <div className="w-full h-full md:px-10 px-5">
        <Title
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="md:w-[60%] w-[100%] flex justify-center items-center border border-[#1c1c21] bg-[#0e0e10] mt-10 md:ml-[20%] rounded-xl p-5 md:p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7"
          >
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What’s your good name?"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What’s your email address?"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows="5"
                required
              />
            </div>

            <button type="submit">
              <div className="px-4 py-4 rounded-lg bg-[#282732] flex justify-center items-center relative cursor-pointer overflow-hidden group">
                <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-[#d9ecff] transition-all duration-500" />
                <p className="uppercase md:text-lg text-black transition-all duration-500 group-hover:text-[#d9ecff] group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">
                  {loading ? "Sending..." : "Send Message"}
                </p>
                <div className="group-hover:bg-[#d9ecff] size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden">
                  <img
                    className="size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"
                    src="/images/arrow-down.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
