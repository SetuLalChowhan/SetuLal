import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e4d3a5ca-0b6c-4861-9c60-a292d3f7f897",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} (Websmith Studio Contact)`,
          subject: `New Collaboration Inquiry from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.location.href = `mailto:setulalchowhan@gmail.com?subject=${encodeURIComponent(
          `Collaboration Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      window.location.href = `mailto:setulalchowhan@gmail.com?subject=${encodeURIComponent(
        `Collaboration Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#f8f8f2] py-24 md:py-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading: 30-48px weight 600 Studio Ink, left-aligned, no kicker */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1a1a1a] tracking-[-1.2px] leading-[1.2] text-left">
            Initiate a Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Editorial Detail */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-[20px] font-normal leading-[1.4] tracking-[-0.5px] text-[#1a1a1a]">
              Available for full-stack engineering contracts, backend architecture consultations, and select technical collaborations.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#1a1a1a]">
              <div>
                <span className="text-[14px] font-medium tracking-[-0.35px] text-[#1a1a1a]/60 block">
                  Direct Correspondence
                </span>
                <a
                  href="mailto:setulalchowhan@gmail.com"
                  className="text-[18px] font-semibold tracking-[-0.4px] text-[#1a1a1a] hover:underline underline-offset-4"
                >
                  setulalchowhan@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[14px] font-medium tracking-[-0.35px] text-[#1a1a1a]/60 block">
                  Location & Timezone
                </span>
                <span className="text-[16px] text-[#1a1a1a] tracking-[-0.4px]">
                  Dhaka, Bangladesh (UTC+6) • Global Remote
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00c950] shrink-0" />
                <span className="text-[14px] text-[#1a1a1a] font-medium tracking-[-0.35px]">
                  Open for new projects and engineering roles
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/SetuLalChowhan"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-[#1a1a1a] underline underline-offset-4 flex items-center gap-1 hover:opacity-75"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/setulal-chowhan/"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-[#1a1a1a] underline underline-offset-4 flex items-center gap-1 hover:opacity-75"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "success" && (
                <div className="p-5 rounded-[12px] bg-[#a4f4cf] text-[#1a1a1a] text-[15px] font-medium">
                  Message dispatched successfully. Setulal will respond shortly.
                </div>
              )}

              {status === "error" && (
                <div className="p-5 rounded-[12px] bg-[#ffc9c9] text-[#1a1a1a] text-[15px] font-medium">
                  {errorMessage || "Unable to deliver message. Please use direct email."}
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[14px] font-medium text-[#1a1a1a] tracking-[-0.35px]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-[#ffffff] border border-[#1a1a1a]/20 focus:border-[#1a1a1a] text-[#1a1a1a] text-[16px] px-4 py-3.5 rounded-[12px] outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium text-[#1a1a1a] tracking-[-0.35px]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@company.com"
                  className="w-full bg-[#ffffff] border border-[#1a1a1a]/20 focus:border-[#1a1a1a] text-[#1a1a1a] text-[16px] px-4 py-3.5 rounded-[12px] outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-[14px] font-medium text-[#1a1a1a] tracking-[-0.35px]"
                >
                  Project Scope or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your objectives, timeline, or engineering inquiry..."
                  className="w-full bg-[#ffffff] border border-[#1a1a1a]/20 focus:border-[#1a1a1a] text-[#1a1a1a] text-[16px] px-4 py-3.5 rounded-[12px] outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Dark Filled Button: #1a1a1a bg, #ffffff text, 16px weight 500, padding 16px 24px, 8px radius */}
              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#1a1a1a] text-[#ffffff] text-[16px] font-medium tracking-[-0.4px] px-6 py-4 rounded-[8px] hover:opacity-90 active:opacity-95 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? "Dispatching..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
