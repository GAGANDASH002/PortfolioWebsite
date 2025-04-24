"use client"
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget; // Store before await
  
    const formData = new FormData(form);
    formData.append("access_key", "7774211a-565d-4399-9f6e-a1e0976f17a8");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
  
    const result = await response.json();
    if (result.success) {
      setSuccess(true);
      form.reset(); // Now this will NOT be null
    }
  }
  

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">Contact Me</h2>
        <form className="bg-black/40 rounded-xl p-8 shadow-lg flex flex-col gap-6" onSubmit={handleSubmit}>
          <input type="text" name="name" required placeholder="Your name" className="rounded-lg px-4 py-2 bg-neutral-900 text-white border border-neutral-700" />
          <input type="email" name="email" required placeholder="you@example.com" className="rounded-lg px-4 py-2 bg-neutral-900 text-white border border-neutral-700" />
          <textarea name="message" required rows={5} placeholder="How can I help you?" className="rounded-lg px-4 py-2 bg-neutral-900 text-white border border-neutral-700" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition">Send Message</button>
        </form>
        {success && <p className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</p>}
      </div>
      {/* Social Icons (reused from About) */}
<div className="flex justify-center gap-6 mt-10">
<a
    href="mailto:gagandash002@gmail.com"
    className="text-gray-400 hover:text-red-400 transition"
    aria-label="Gmail"
  >
    <Mail size={32} />
  </a>
  <a
    href="https://github.com/GAGANDASH002"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
    aria-label="GitHub"
  >
    <Github size={32} />
  </a>
  <a
    href="https://linkedin.com/in/gagan-dash-596830326"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition"
    aria-label="LinkedIn"
  >
    <Linkedin size={32} />
  </a>
</div>
    </section>
  );
}
