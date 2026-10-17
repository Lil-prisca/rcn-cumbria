import { useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  CreditCard,
  HandHeart,
  Landmark,
  Quote,
} from "lucide-react";
import {
  FaApplePay,
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaStripe,
} from "react-icons/fa";
import { useSection } from "../../content/useSection";

const Eyebrow = ({ children }) => (
  <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide text-rcn-red">
    {children}
    <span className="h-px w-10 bg-rcn-red" />
  </p>
);

const GiveSection = () => {
  const info = useSection("give.info") || {};
  const bank = useSection("give.bank") || {};

  const {
    stripeLink = "https://donate.stripe.com/cNi7sM5BX6B85jpdaIaIM00",
    accountName = "Remnant Christian Network Cumbria",
    sortCode = "401622",
    accountNumber = "12712210",
  } = info;

  const rows = [
    { label: "Account Name", value: accountName },
    { label: "Sort Code", value: sortCode },
    { label: "Account Number", value: accountNumber },
  ];

  const [copied, setCopied] = useState("");

  const copy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="bg-rcn-snow font-sans">
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        {/* ───────── Scripture quote ───────── */}
        <div className="rounded-xl bg-rcn-ice px-6 pb-7 pt-4 bg-[#eff1fc] text-center">
          <Quote
            size={34}
            className="mx-auto rotate-180 fill-[#7ea7e8] text-[#7ea7e8]"
          />
          <p className="mx-auto mt-3 max-w-[640px] text-[17px] italic leading-[1.45] text-rcn-navy">
            “Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver.”
          </p>
          <p className="mt-2 text-[16px] text-rcn-body">
            2 Corinthians 9:7 (ESV)
          </p>
        </div>

        {/* ───────── Ways to give ───────── */}
        <div className="mt-8">
          <Eyebrow>Ways to Give</Eyebrow>
          <h2 className="mt-1 text-[34px] font-extrabold leading-tight text-rcn-navy">
            Choose a Giving Method
          </h2>
          <p className="mt-2 max-w-[700px] text-[16px] leading-[1.5] text-rcn-body">
            There are two simple ways to support the work of RCN Cumbria. You
            can give securely online via card payment, or by bank transfer.
          </p>
        </div>

        {/* Two cards side by side on desktop */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Card payment */}
          <div className="rounded-xl bg-[#eff1fc] px-6 pb-8 pt-4 lg:flex-1">
            <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#d9dcfa] text-rcn-navy">
              <CreditCard size={38} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-[24px] font-extrabold leading-tight text-rcn-navy">
              Give Online (Card Payment)
            </h3>
            <p className="mt-2 text-[16px] leading-[1.5] text-rcn-body">
              Make a secure one-off or recurring gift using your debit or credit
              card via Stripe.
            </p>

            <a
              href={stripeLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-md bg-rcn-navy py-3.5 text-[16px] font-bold text-rcn-white shadow-sm transition hover:bg-rcn-night"
            >
              Give Securely via Stripe
              <ArrowRight size={18} />
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <span className="flex items-end gap-1.5 text-[10px] text-rcn-navy">
                Powered by
                <FaStripe size={44} className="-mb-1.5 text-rcn-navy" />
              </span>
              <FaCcVisa size={36} className="text-[#1a1f71]" />
              <FaCcMastercard size={36} className="text-[#eb001b]" />
              <FaCcAmex size={36} className="text-[#2e77bc]" />
              <FaApplePay size={40} className="text-black" />
            </div>
          </div>

          {/* Bank transfer */}
          <div className="rounded-xl bg-[#fdf6ec] px-6 pb-6 pt-4 lg:flex-1">
            <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#fbe2b8] text-rcn-navy">
              <Landmark size={38} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-[24px] font-extrabold leading-tight text-rcn-navy">
              Give by Bank Transfer
            </h3>
            <p className="mt-2 text-[16px] leading-[1.5] text-rcn-body">
              You can also give directly via bank transfer using the details
              below.
            </p>

            <ul className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-lg bg-rcn-white shadow-[0_1px_8px_rgba(15,23,42,0.08)]">
              {rows.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 px-4 py-3.5 text-[14px]"
                >
                  <span className="w-[148px] shrink-0 font-bold text-rcn-navy">
                    {label}
                  </span>
                  <span className="flex-1 text-rcn-navy">
                    {value}
                    <span className="text-[12px] text-rcn-faint"></span>
                  </span>
                  <button
                    type="button"
                    onClick={() => copy(label, value)}
                    aria-label={`Copy ${label}`}
                    className="text-rcn-navy transition hover:text-rcn-red"
                  >
                    {copied === label ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-[16px] leading-[1.45] text-rcn-body">
              Please use a reference (e.g. Giving) so we can identify your gift.
              Thank you for your support.
            </p>
          </div>
        </div>

        {/* ───────── Generosity as Worship ───────── */}
        <div className="mt-8">
          <Eyebrow>Generosity as Worship</Eyebrow>
          <h2 className="mt-1 text-[34px] font-extrabold leading-tight text-rcn-navy">
            Generosity as Worship
          </h2>
          <p className="mt-2 text-[16px] leading-[1.5] text-rcn-body">
            Giving is an expression of our worship and commitment to God's work.
            Through tithes, offerings and voluntary donations, we support our
            gatherings, biblical teachings, outreach and the advancement of the
            Gospel in Cumbria and beyond.
          </p>
        </div>

        {/* Faithful Stewardship */}
        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-rcn-ice px-5 py-5 sm:flex-row sm:items-center sm:gap-9">
          <span className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#d6e5fb] text-rcn-navy">
            <HandHeart size={38} strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[22px] font-extrabold text-rcn-navy">
              Faithful Stewardship
            </h3>
            <p className="mt-1.5 max-w-[700px] text-[16px] leading-[1.5] text-rcn-body">
              We are committed to managing every contribution responsibly,
              ensuring that donations are used to support the ministry's
              activities and purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
