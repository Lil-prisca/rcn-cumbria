import { useState } from "react";
// import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { useSection } from "../../content/useSection";

const EMAILJS_SERVICE_ID = "service_piy6fyu";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_zkg3vgk";
const EMAILJS_PUBLIC_KEY = "Lb_ogUAd-BxtvtjuV";
const NOTIFY_EMAIL = "layodemo2@gmail.com";

const inputClass =
  "mt-1.5 w-full rounded-md border border-slate-200 bg-rcn-white px-3.5 py-2.5 text-[14px] text-rcn-navy placeholder:text-rcn-faint focus:border-rcn-navy focus:outline-none focus:ring-2 focus:ring-rcn-navy/20";

const labelClass = "block text-[14px] font-semibold text-rcn-navy";

const Eyebrow = ({ children }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
    {children}
    <span className="h-px w-8 bg-rcn-red" />
  </p>
);

const ContactInfo = () => {
  const touch = useSection("contact.touch") || {};
  const {
    heading = "Contact Information",
    intro = "You can reach us by email, phone or through our WhatsApp Community. We will do our best to respond as soon as possible.",
    email = "info@rcncumbria.org",
    phone = "+44 7XXX XXXXXXX",
    whatsappLink = "https://chat.whatsapp.com/your-invite-link",
  } = touch;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactConsent: "",
    subject: "General Inquiry",
    message: "",
    gdprConsent: false,
  });

  const update = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          to_email: NOTIFY_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          contactConsent: formData.contactConsent,
          subject: formData.subject,
          message: formData.message,
          gdprConsent: formData.gdprConsent ? "Yes" : "No",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-rcn-snow font-sans">
      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-[47px]">
        {/* ───────── Row 1: Contact Information + Enquiry Form ───────── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[22px]">
          {/* PART 1: Contact Information */}
          <div className="lg:w-[48%] lg:pt-4">
            <div className="lg:pl-6">
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 className="mt-1 text-[34px] font-extrabold leading-tight text-rcn-navy">
                {heading}
              </h2>
              <p className="mt-2 max-w-[400px] text-[16px] leading-[1.5] text-rcn-body">
                {intro}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-5 rounded-lg bg-rcn-cloud px-6 py-6">
                <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3e8f4] text-rcn-navy">
                  <Mail size={30} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold text-rcn-navy">Email</h3>
                  <p className="mt-1 text-[15px] leading-[1.4] text-rcn-body">
                    Send us an email for general enquiries or specific
                    questions.
                  </p>
                  <p className="mt-1.5 text-[15px]">
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-rcn-link hover:underline"
                    >
                      {email}
                    </a>{" "}
                    <span className="text-rcn-body">(placeholder)</span>
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-5 rounded-lg bg-rcn-cloud px-6 py-6">
                <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e3e8f4] text-rcn-navy">
                  <Phone size={30} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold text-rcn-navy">
                    Telephone
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.4] text-rcn-body">
                    Give us a call during our working hours.
                  </p>
                  <p className="mt-1.5 text-[15px]">
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="font-semibold text-rcn-link hover:underline"
                    >
                      {phone}
                    </a>{" "}
                    <span className="text-rcn-body">(placeholder)</span>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 rounded-lg bg-rcn-cloud px-6 py-6">
                <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#1da851] text-rcn-white">
                  <MessageCircle size={32} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold text-rcn-navy">
                    WhatsApp Community
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.4] text-rcn-body">
                    Join our WhatsApp Community for updates, announcements and
                    more.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-flex items-center gap-2 text-[15px] font-medium text-rcn-link hover:underline"
                  >
                    Join Our WhatsApp Community
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PART 2: Enquiry Form */}
          <div className="rounded-xl bg-rcn-cloud px-6 pb-6 pt-7 lg:flex-1">
            <Eyebrow>Send Us a Message</Eyebrow>
            <h2 className="mt-1 text-[30px] font-extrabold leading-tight text-rcn-navy">
              Enquiry Form
            </h2>
            <p className="mt-2 max-w-[360px] text-[16px] leading-[1.5] text-rcn-body">
              Fill in the form below and we will get back to you as soon as
              possible.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-rcn-white p-8 text-center">
                <h4 className="text-xl font-bold text-rcn-navy">
                  Message Sent
                </h4>
                <p className="mt-2 text-[14px] text-rcn-body">
                  Thanks for reaching out — our team will get back to you as
                  soon as possible.
                </p>
              </div>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-rcn-red">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={inputClass}
                    value={formData.name}
                    onChange={update("name")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-rcn-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className={inputClass}
                    value={formData.email}
                    onChange={update("email")}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={inputClass}
                    value={formData.phone}
                    onChange={update("phone")}
                  />
                </div>

                {/* Contact permission */}
                <div>
                  <span className={labelClass}>
                    Would you like us to contact you?{" "}
                    <span className="text-rcn-red">*</span>
                  </span>
                  <div className="mt-2 flex items-center gap-6">
                    {["yes", "no"].map((value) => (
                      <label
                        key={value}
                        className="flex cursor-pointer items-center gap-2 text-[14px] text-rcn-navy"
                      >
                        <input
                          type="radio"
                          name="contactConsent"
                          value={value}
                          required
                          checked={formData.contactConsent === value}
                          onChange={update("contactConsent")}
                          className="h-4 w-4 accent-rcn-red"
                        />
                        {value === "yes" ? "Yes" : "No"}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    className={inputClass}
                    value={formData.subject}
                    onChange={update("subject")}
                  >
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Volunteer Opportunities</option>
                    <option>Giving Support</option>
                    <option>Testimonies</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span className="text-rcn-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="How can we help you?"
                    className={`${inputClass} h-[98px] resize-y`}
                    value={formData.message}
                    onChange={update("message")}
                  />
                </div>

                {/* GDPR consent */}
                <label className="flex cursor-pointer items-start gap-3 text-[12px] leading-[1.5] text-rcn-body">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-rcn-red"
                    checked={formData.gdprConsent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gdprConsent: e.target.checked,
                      })
                    }
                  />
                  <span>
                    I agree to my data being processed in line with GDPR. We
                    respect your privacy and will only use this information for
                    RCN Cumbria updates.
                  </span>
                </label>

                {error && (
                  <p className="text-[13px] font-medium text-rcn-red">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-rcn-red py-3.5 text-[14px] font-bold text-rcn-white shadow-sm transition hover:bg-rcn-redDark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                  {!submitting && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ───────── Row 2: Be Part of Our Community ───────── */}
        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pl-[10px]">
          <div className="lg:w-[46%]">
            <Eyebrow>Join Us</Eyebrow>
            <h2 className="mt-1 text-[34px] font-extrabold leading-tight text-rcn-navy">
              Be Part of Our Community
            </h2>
            <p className="mt-3 text-[16px] leading-[1.55] text-rcn-body">
              We would love for you to join us at our gatherings and be part of
              what God is doing in Cumbria. Explore our upcoming events and
              activities to find out how you can get involved.
            </p>
            <a
              href="/activities"
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-rcn-navy px-8 py-4 text-[15px] font-bold text-rcn-white shadow-sm transition hover:bg-rcn-night"
            >
              View Our Activities
              <ArrowRight size={18} />
            </a>
          </div>

          <img
            src="/images/community-conversation.jpg"
            alt="Two people smiling in conversation"
            className="h-[209px] w-full rounded-lg object-cover shadow-[0_2px_10px_rgba(15,23,42,0.12)] lg:w-[435px] lg:shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
