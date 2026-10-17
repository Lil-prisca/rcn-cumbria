import { useEffect } from "react";
import {
  HeartHandshake,
  FileText,
  Mail,
  RefreshCw,
  ShieldCheck,
  TriangleAlert,
  Users,
} from "lucide-react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useSection } from "../content/useSection";

const Eyebrow = ({ children }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wide text-rcn-red">
    {children}
    <span className="h-px w-12 bg-rcn-red" />
  </p>
);

const IconCircle = ({ icon: Icon, size = 50, iconSize = 22 }) => (
  <span
    style={{ height: size, width: size }}
    className="flex shrink-0 items-center justify-center rounded-full bg-[#e4ebfb] text-rcn-navy"
  >
    <Icon size={iconSize} strokeWidth={1.7} />
  </span>
);

const commitments = [
  [
    {
      icon: ShieldCheck,
      text: "Maintain a safe and supportive environment for everyone participating in our activities.",
    },
    {
      icon: Users,
      text: "Respond promptly and appropriately to safeguarding concerns, disclosures and allegations.",
    },
    {
      icon: FileText,
      text: "Ensure that those entrusted with safeguarding responsibilities are appropriately selected, supported and, where legally eligible and appropriate, DBS checked.",
    },
  ],
  [
    {
      icon: Users,
      text: "Promote responsible conduct, appropriate boundaries and accountability among ministry leaders, workers and volunteers.",
    },
    {
      icon: HeartHandshake,
      text: "Work with statutory safeguarding authorities and other relevant organisations when necessary.",
    },
    {
      icon: RefreshCw,
      text: "Review our safeguarding arrangements and practices regularly.",
    },
  ],
];

const columns = [
  {
    eyebrow: "Confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "We recognise the importance of handling safeguarding concerns with sensitivity and discretion.",
      "Information shared with our safeguarding team will be handled carefully and shared only where necessary to protect an individual, respond appropriately to a concern or fulfil our safeguarding and legal responsibilities.",
      "We cannot promise absolute confidentiality where someone may be at risk of harm.",
    ],
  },
  {
    eyebrow: "Children and Young People",
    title: "Children and Young People",
    paragraphs: [
      "We want children and young people to participate in church life in a safe and supportive environment where they feel respected and valued.",
      "Those entrusted with responsibilities involving children and young people are expected to maintain appropriate boundaries and follow our safeguarding procedures and codes of conduct. Where applicable, appropriate recruitment and DBS checking requirements will be observed.",
      "Parents and carers are encouraged to raise any questions or concerns about their child's participation in our activities with the safeguarding team.",
    ],
  },
  {
    eyebrow: "Adults at Risk",
    title: "Adults at Risk",
    paragraphs: [
      "We recognise that adults may also experience abuse, exploitation, neglect or other forms of harm.",
      "We are committed to responding appropriately to concerns while respecting the dignity, wishes and circumstances of each individual and recognising our responsibility to protect people from harm.",
    ],
  },
];

export default function SafeguardingPage() {
  const intro = useSection("safeguarding.intro") || {};
  const report = useSection("safeguarding.report") || {};

  const eyebrow = intro.eyebrow || "Safeguarding";
  const title = intro.title || "Safeguarding";
  const team = report.team?.length
    ? report.team
    : ["Abigael Dumbiri", "Deborah Akindina"];
  const email = report.email || "safeguarding.rcncumbria@gmail.com";

  useEffect(() => {
    document.title = `${title} — RCN Cumbria`;
  }, [title]);

  return (
    <main className="min-h-screen bg-rcn-snow font-sans">
      <Navbar />

      <div className="mx-auto max-w-[1100px] px-6 pb-12 pt-24">
        {/* ───────── Intro ───────── */}
        <header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-1 text-[40px] font-extrabold leading-tight text-rcn-navy">
            {title}
          </h1>
          <p className="mt-3 text-[16px] leading-[1.5] text-rcn-body">
            At Remnant Christian Network Cumbria (RCN Cumbria), we are committed
            to creating a safe, welcoming and caring environment for everyone
            who participates in our gatherings, programmes and activities,
            whether in person or online.
          </p>
          <p className="mt-3 text-[16px] leading-[1.5] text-rcn-body">
            We believe that every person is made in the image of God and
            deserves to be treated with dignity, respect and care. Safeguarding
            is therefore an essential part of our responsibility as a Christian
            community.
          </p>
        </header>

        {/* ───────── Immediate danger ───────── */}
        <div className="mt-8 flex flex-col items-start gap-5 rounded-lg border border-rcn-red bg-[#fdeaec] px-6 py-6 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#fbd3d8] text-rcn-red">
            <TriangleAlert size={32} className="fill-rcn-red text-rcn-white" />
          </span>
          <div>
            <h2 className="text-[20px] font-bold text-rcn-red">
              If Someone Is in Immediate Danger
            </h2>
            <p className="mt-1.5 text-[16px] leading-[1.5] text-rcn-body">
              If you believe that a child or adult is in immediate danger or at
              risk of serious harm, call{" "}
              <a href="tel:999" className="font-bold text-rcn-red underline">
                999
              </a>
              .
            </p>
            <p className="mt-1.5 max-w-[700px] text-[16px] leading-[1.5] text-rcn-body">
              Where appropriate, safeguarding concerns may also be reported
              directly to the police or relevant local authority safeguarding
              services.
            </p>
          </div>
        </div>

        {/* ───────── Our Commitment ───────── */}
        <section className="mt-8">
          <Eyebrow>Our Commitment</Eyebrow>
          <h2 className="mt-1 text-[36px] font-extrabold leading-tight text-rcn-navy">
            Our Commitment
          </h2>
          <p className="mt-2 text-[16px] text-rcn-body">
            RCN Cumbria is committed to safeguarding children, young people and
            adults at risk. We seek to:
          </p>

          {/* Two columns side by side on desktop */}
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:gap-12">
            {commitments.map((col, i) => (
              <ul key={i} className="flex flex-col gap-5 lg:flex-1">
                {col.map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-5">
                    <IconCircle icon={icon} />
                    <span className="text-[15px] leading-[1.4] text-rcn-body">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ───────── Reporting a Safeguarding Concern ───────── */}
        <section className="mt-9">
          <Eyebrow>Reporting a Safeguarding Concern</Eyebrow>
          <h2 className="mt-1 text-[36px] font-extrabold leading-tight text-rcn-navy">
            Reporting a Safeguarding Concern
          </h2>
          <p className="mt-2 text-[16px] leading-[1.5] text-rcn-body">
            If you are concerned about the safety or wellbeing of a child, young
            person or adult at risk, or about something that has happened during
            an RCN Cumbria activity, please contact our designated safeguarding
            team.
          </p>

          {/* Team + email side by side with a divider */}
          <div className="mt-4 flex flex-col gap-6 rounded-lg bg-rcn-ice px-6 py-5 md:flex-row md:items-center md:gap-0">
            <div className="flex items-center gap-5 md:w-1/2 md:border-r md:border-slate-300/70">
              <IconCircle icon={Users} size={64} iconSize={30} />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-rcn-body">
                  Designated Safeguarding Team
                </p>
                {team.map((name) => (
                  <p
                    key={name}
                    className="mt-1 text-[18px] font-bold leading-tight text-rcn-navy"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 md:w-1/2 md:pl-8">
              <IconCircle icon={Mail} size={64} iconSize={30} />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-rcn-body">
                  Safeguarding Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 block break-all text-[18px] font-bold text-rcn-navy hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[16px] leading-[1.5] text-rcn-body">
            You do not need to be certain that abuse or harm has occurred before
            raising a concern. If something does not feel right, we encourage
            you to report it.
          </p>
          <p className="mt-3 text-[16px] leading-[1.5] text-rcn-body">
            You may also contact the relevant local authority safeguarding
            service or the police directly. If your concern involves a member of
            the safeguarding team, you do not need to report it to that person.
          </p>
        </section>

        {/* ───────── Three columns ───────── */}
        <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:gap-8">
          {columns.map(({ eyebrow: label, title: heading, paragraphs }) => (
            <section key={heading} className="lg:flex-1">
              <Eyebrow>{label}</Eyebrow>
              <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-rcn-navy">
                {heading}
              </h2>
              <div className="mt-2 space-y-4">
                {paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-[13px] leading-[1.45] text-rcn-body"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
