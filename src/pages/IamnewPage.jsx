import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useSection } from "../content/useSection";
import { valueIcons } from "../content/valueIcons";
import { sendEmail } from "../lib/sendEmail";

const IAmNewPage = () => {
  const banner = useSection("iamnew.banner");
  const expect = useSection("iamnew.expect");
  const faq = useSection("iamnew.faq");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    contactConsent: "",
    message: "",
    gdprConsent: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await sendEmail("firstTimer", {
        fromName: formData.name,
        fromEmail: formData.email,
        phone: formData.phone,
        message: formData.message,
        contactConsent:
          formData.contactConsent === "yes"
            ? "Yes"
            : formData.contactConsent === "no"
              ? "No"
              : "",
      });
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      setError(
        "Sorry, your details could not be sent. Please try again in a moment.",
      );
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className=" min-h-screen text-white">
      <Navbar />
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center opacity-30"
            alt={banner.imageAlt || ""}
            src={banner.image}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#19143E] via-[#19143E]/70 to-[#19143E]/20" />
        </div>

        <div className="relative z-10 max-w-4xl  px-6 lg:px-10 py-32 text-left">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl   font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            {banner.line1}
            <span className="block text-secondary">{banner.accent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {banner.description}
          </motion.p>
        </div>
      </section>

      {/* What to expect */}
      <div className="w-100% bg-on-primary">
        <section className=" bg-background text-black py-20 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-4 font-bold uppercase">
              {expect.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl   font-bold">
              {expect.heading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(expect.items || []).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className=" border  rounded-2xl p-8 text-center bg-black/10 border-primary text-black transition-colors"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-secondary text-2xl mx-auto mb-6">
                  {valueIcons[item.icon] ?? valueIcons.heart}
                </div>
                <h3 className="text-xl  font-bold mb-3">{item.title}</h3>
                <p className=" leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-primary max-w-8xl">
        {/* FAQ */}
        <section className=" bg-primary  py-10 max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-4 font-bold uppercase">
              {faq.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl   font-bold">{faq.heading}</h2>
          </motion.div>

          <div className="space-y-4">
            {(faq.items || []).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary flex-shrink-0">
                  {valueIcons[item.icon] ?? valueIcons.heart}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                  <p className="text-white/60 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Connect card form */}
        <section className="py-10 max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl   font-bold mb-3">
                Let Us Know You're Coming
              </h2>
              <p className="text-white/60">
                Fill in your details so our welcome team can be ready to greet
                you personally.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  We Can't Wait to Meet You!
                </h4>
                <p className="text-white/60 text-sm">
                  Our team will be looking out for you on your visit.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    // placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      // placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-2 block">
                      Phone Number(WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      // placeholder="+44 7000 000000"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>
                {/* consent to contact */}

                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Would you like us to contact you?
                  </label>

                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-white">
                      <input
                        type="radio"
                        name="contactConsent"
                        value="yes"
                        checked={formData.contactConsent === "yes"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactConsent: e.target.value,
                          })
                        }
                      />
                      Yes
                    </label>

                    <label className="flex items-center gap-2 text-white">
                      <input
                        type="radio"
                        name="contactConsent"
                        value="no"
                        checked={formData.contactConsent === "no"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactConsent: e.target.value,
                          })
                        }
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Mesage to Us
                  </label>
                  <textarea
                    type="text"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="message"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                  />
                </div>
                {/* consent to data */}
                <div>
                  <label className="flex items-start gap-3 text-white/60 text-xs">
                    <input
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          gdprConsent: e.target.checked,
                        })
                      }
                      className="mt-1"
                    />

                    <span>
                      I agree to my data being processed in line with GDPR. We
                      respect your privacy and will only use this information
                      for RCN Cumbria updates.
                    </span>
                  </label>
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "I'm Coming!"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-5 text-center px-6">
          <p className="text-white/50 mb-4">
            Have more questions before you visit?
          </p>
          <Link to="/contact-us">
            <button className="border border-white/30 px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-[#19143E] transition-all">
              Get in Touch
            </button>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IAmNewPage;
