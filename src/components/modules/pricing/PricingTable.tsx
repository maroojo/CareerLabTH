// src/components/PricingTable.jsx


const featuresData = [
  {
    category: "Features",
    rows: [
      {
        label: "Career Assessment",
        info: "i",
        essential: "Career Assessment (Standard)",
        premium: "A premium, all-in-one career assessment and personalized AI-Competitive Career Planning",
        elite: "A premium, all-in-one career assessment and personalized AI-Competitive Career Planning",
      },
      {
        label: "Brief Description",
        info: "i",
        essential: "An excellent first assessment to help you discover your education and career direction.",
        premium: "A premium, all-in-one career assessment and personalized AI-Competitive Career Planning.",
        elite: "A premium, all-in-one career assessment and personalized AI-Competitive Career Planning.",
      },
      {
        label: "Career Database",
        info: "i",
        essential: "100+ careers",
        premium: "2,000+ careers (Live Database for Competitive Market)",
        elite: "2,000+ careers (Live Database for Competitive Market)",
      },
      {
        label: "Eligible Age",
        info: "i",
        essential: "15+",
        premium: "15+",
        elite: "15+",
      },
      {
        label: "Report Generation",
        info: "i",
        essential: "Within 24 hours (Sample)",
        premium: "Instant (Sample)",
        elite: "Instant (Sample)",
      },
      {
        label: "Result Interpretation",
        info: "i",
        essential: "Group Session (30 minutes)",
        premium: "Self-Guided",
        elite: "Private Coaching (60 minutes)",
      },
      {
        label: "Language",
        info: "i",
        essential: "Questions: English & Thai (Report: English)",
        premium: "Questions: English (Report: English)",
        elite: "Questions: English (Report: English)",
      },
      {
        label: "AI-Competitive Career Planning Account",
        info: "i",
        essential: "PDF Report",
        premium: "1-year Unlimited Access (Viewer)",
        elite: "1-year Unlimited Access (Viewer)",
      },
      {
        label: "Certificate",
        info: "i",
        essential: "✔",
        premium: "✔",
        elite: "✔",
      },
    ],
  },
  {
    category: "Personalized Insights You Will Get",
    rows: [
      {
        label: "Your Top Career Matches",
        info: "",
        essential: "4 Suggested Fields",
        premium: "30+ (Constantly Updated)",
        elite: "30+ (Constantly Updated)",
      },
      {
        label: "Your Professional Interests",
        info: "",
        essential: "Basic Interests",
        premium: "6 Basic Interest Areas (Science, Nature, Knowledge, Business, Arts & Crafts, Business, and Service)",
        elite: "6 Basic Interest Areas (Science, Nature, Knowledge, Business, Arts & Crafts, Business, and Service)",
      },
      {
        label: "Your Additional Occupations to Explore",
        info: "",
        essential: "Available on Generated Report",
        premium: "2,000+ Occupations, Live Database",
        elite: "2,000+ Occupations, Live Database",
      },
      {
        label: "Your Key Motivations",
        info: "",
        essential: "✔",
        premium: "3 Types (Job, Work Activities, Values), Live Database",
        elite: "3 Types (Job, Work Activities, Values), Live Database",
      },
      {
        label: "Your Unique Strengths",
        info: "",
        essential: "✔",
        premium: "2 Types of Strengths (Current & Potential)",
        elite: "2 Types of Strengths (Current & Potential)",
      },
      {
        label: "Your Skills of the Future",
        info: "",
        essential: "✔",
        premium: "7 Skill Areas (Creativity, Self-Management, Critical Thinking, Digital Literacy, Communication, Leadership, and Collaboration)",
        elite: "7 Skill Areas (Creativity, Self-Management, Critical Thinking, Digital Literacy, Communication, Leadership, and Collaboration)",
      },
      {
        label: "Your Personal Preferences",
        info: "",
        essential: "✔",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Company Style",
        info: "",
        essential: "-",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Career Planning and Exploration Guide",
        info: "",
        essential: "-",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Growth Mindset",
        info: "",
        essential: "-",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Educational Recommendations",
        info: "",
        essential: "-",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Training Recommendations",
        info: "",
        essential: "-",
        premium: "✔",
        elite: "✔",
      },
      {
        label: "Your Personal AI-Competitive Career Coaching",
        info: "",
        essential: "-",
        premium: "-",
        elite: "✔",
      },
    ],
  },
];

const CheckIcon = () => (
  <span className="text-green-500 font-bold">✔</span>
);

const InfoIcon = () => (
  <span className="text-gray-400 text-xs inline-block ml-1 relative group">
    (i)
    {/* Optional: Tooltip for info icon */}
    {/* <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
      More info here
    </span> */}
  </span>
);

const PricingTable = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 max-w-[1440px]">
      {featuresData.map((section, sectionIndex) => (
        <div key={section.category} className="mb-12">
          {/* Section Header */}
          <h2 className={`text-2xl font-bold text-center bg-red-100 ${sectionIndex === 0 ? 'text-gray-800 mb-8' : 'text-accent-red mb-4 mt-8 md:mt-12'}`}>
            {section.category === "Features" ? "Features" : "Personalized Insights You Will Get"}
          </h2>

          {/* Table Rows */}
          {section.rows.map((row, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const rowBgClass = isEvenRow ? 'bg-table-bg-light' : 'bg-table-bg-dark';

            return (
              <div
                key={row.label}
                className={`flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] text-sm py-4 px-4 border-b border-gray-200 ${rowBgClass}`}
              >
                {/* Label Column (Always visible) */}
                <div className="flex items-center font-semibold text-gray-700 mb-2 md:mb-0 md:col-span-1">
                  {row.label}
                  {row.info === "i" && <InfoIcon />}
                </div>

                {/* Essential Plan (Mobile & Tablet: flex, Desktop: grid cell) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:text-center mt-2 md:mt-0">
                  <span className="font-semibold text-xs text-gray-500 md:hidden">ESSENTIAL:</span>
                  <span className={`text-gray-800 flex-1 md:flex-none ${row.essential === "✔" || row.essential === "-" ? 'text-center md:text-center' : 'text-left md:text-center'}`}>
                    {row.essential === "✔" ? <CheckIcon /> : row.essential}
                  </span>
                </div>

                {/* Premium Plan (Mobile & Tablet: flex, Desktop: grid cell) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:text-center mt-2 md:mt-0">
                  <span className="font-semibold text-xs text-gray-500 md:hidden">PREMIUM:</span>
                  <span className={`text-gray-800 flex-1 md:flex-none ${row.premium === "✔" || row.premium === "-" ? 'text-center md:text-center' : 'text-left md:text-center'}`}>
                    {row.premium === "✔" ? <CheckIcon /> : row.premium}
                  </span>
                </div>

                {/* Elite Plan (Mobile & Tablet: flex, Desktop: grid cell) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:text-center mt-2 md:mt-0">
                  <span className="font-semibold text-xs text-gray-500 md:hidden">ELITE:</span>
                  <span className={`text-gray-800 flex-1 md:flex-none ${row.elite === "✔" || row.elite === "-" ? 'text-center md:text-center' : 'text-left md:text-center'}`}>
                    {row.elite === "✔" ? <CheckIcon /> : row.elite}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default PricingTable;