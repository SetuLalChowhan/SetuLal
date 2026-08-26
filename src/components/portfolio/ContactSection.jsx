import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Send message via web3forms or fallback
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e4d3a5ca-0b6c-4861-9c60-a292d3f7f897", // public contact access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Contact)`,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto link if API key is inactive
        window.location.href = `mailto:setulalchowhan@gmail.com?subject=${encodeURIComponent(
          `Portfolio Contact from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      // Fallback directly on network error
      window.location.href = `mailto:setulalchowhan@gmail.com?subject=${encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                I'm always interested in hearing about new software engineering opportunities,
                backend/full-stack projects, and technical collaborations. Whether you have
                a question or an exciting idea, feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Mail className="text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a
                    href="mailto:setulalchowhan@gmail.com"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    setulalchowhan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone className="text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a
                    href="tel:01703235224"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    01703235224
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MapPin className="text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-neutral-400">
                    Natunbazar, Dhaka-1212, Gulshan
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SetuLalChowhan"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/setulal-chowhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-black border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-neutral-400 max-w-sm">
                    Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage || "Failed to send message. Please try again."}</span>
                    </motion.div>
                  )}

                  {/* Full Name */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-300"
                    >
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-300"
                    >
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-neutral-300"
                    >
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none text-sm md:text-base"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full group flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-8 py-4 hover:bg-neutral-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

