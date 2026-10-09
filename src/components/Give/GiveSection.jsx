import { FaFileSignature } from "react-icons/fa6";
import { useSection } from "../../content/useSection";

const GiveSection = () => {
  const info = useSection("give.info");
  const bank = useSection("give.bank");

  const rows = [
    ["Account number", bank.accountNumber],
    ["Sort code", bank.sortCode],
    ["Country or region", bank.country],
    ["Currency", bank.currency],
  ];

  return (
    <section className="bg-surface-container-low py-24 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Giving logic */}
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8 tracking-tight">
              {info.heading}
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-xl whitespace-pre-line">
              {info.description}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <FaFileSignature />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-1">
                    {info.featureTitle}
                  </h4>
                  <p className="text-on-surface-variant">{info.featureText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation card */}
          <div className="w-fit mx-auto bg-surface-container-lowest p-2 px-5 md:p-5 rounded-3xl border border-outline-variant/20 shadow-2xl shadow-navy/5">
            <h3 className="text-2xl font-bold mb-2 text-navy">
              {bank.cardHeading}
            </h3>
            <div className="flex flex-col justify-center">
              <div className="flex justify-between p-5 max-w-2xl mb-5">
                <span className="font-medium text-on-surface">
                  Tithe &amp; Offering
                </span>
                <span className="font-medium text-on-surface">Missions</span>
              </div>
              <div className="w-[70vw] md:w-100 mx-auto bg-black/30 rounded-2xl p-5 text-white shadow-lg">
                <div className="space-y-5">
                  {rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center gap-4"
                    >
                      <span className="text-black text-[15px] underline font-medium">
                        {label}
                      </span>
                      <span className="text-black text-[15px] font-semibold text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
