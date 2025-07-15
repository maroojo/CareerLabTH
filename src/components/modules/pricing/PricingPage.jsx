import React from "react";
import Image from "next/image";
import PricingTable from "./PricingTable";

const PricingPage = () => {
  return (
    <div className="mt-20 flex flex-col mx-60">
      <section className="flex flex-col items-center mx-3 mb-10 justify-stretch">
        <h1 className="text-3xl font-bold mb-4 font-grotesk">Pricing</h1>
        <h3 className="flex text-center text-sm">
          Charged only after confirmation. No hidden fees. One-time payment.
        </h3>
      </section>
      <section className="flex justify-end items-start gap-3">
        <div className="flex flex-col justify-center text-center w-64">
          <h3 className="text-lg font-semibold font-grotesk mb-2">Popular</h3>
          <div className="flex justify-center mb-2">
            <Image
              src={"asset/pricing/star.svg"}
              alt="popular"
              width={30}
              height={30}
            />
          </div>
          <h2 className="text-gradient font-grotesk uppercase">essential</h2>
          <p className="text-es text-center h-28">
            Discover your best-fit careers with a clinical-grade assessment.
          </p>
          <hr className="w-full h-1 text-gray-200" />
          <h1 className="text-gradient text-2xl ">
            3,500<small className="text-xs">THB</small>
          </h1>
          <p className="text-es">(0% interest for up to 10 months)</p>
          <button className="bg-[linear-gradient(-4deg,#3b82f6_0%,#3b82f6_30%,#ef4444_80%,#ef4444_100%)] text-white px-4 py-2 rounded-full">
            Purchase
          </button>
        </div>
        <div className="flex flex-col justify-center text-center w-64">
          <h3 className="text-lg font-semibold font-grotesk mb-2">
            Best-Seller
          </h3>
          <Image
            src={"asset/pricing/like.svg"}
            alt="Best-Seller"
            width={30}
            height={30}
          />
          <h2 className="text-gradient font-grotesk uppercase">premium</h2>
          <p className="text-es text-center h-28">
            Get 1-year access to the world’s best, real-time career planning
            tool built for the AI era.
          </p>
          <hr className="w-full h-1 text-gray-200" />
          <h1 className="text-gradient text-2xl ">
            8,500<small className="text-xs">THB</small>
          </h1>
          <p className="text-es">(0% interest for up to 10 months)</p>
          <button className="bg-[linear-gradient(-4deg,#3b82f6_0%,#3b82f6_30%,#ef4444_80%,#ef4444_100%)] text-white px-4 py-2 rounded-full">
            Purchase
          </button>
        </div>
        <div className="flex flex-col justify-center w-64">
          <h3 className="text-lg font-semibold font-grotesk mb-2 opacity-0">
            Maximum
          </h3>
          <Image
            src={"asset/pricing/diamond.svg"}
            alt="maximum"
            width={30}
            height={30}
          />
          <h2 className="text-gradient font-grotesk uppercase">elite</h2>
          <p className="text-es text-center h-28">
            Personalize your roadmap with the world’s best career planning tool
            and a certified coach.
          </p>
          <hr className="w-full h-1 text-gray-200" />
          <h1 className="text-gradient text-2xl ">
            15,000<small className="text-xs">THB</small>
          </h1>
          <p className="text-es">(0% interest for up to 10 months)</p>
          <button className="bg-[linear-gradient(-4deg,#3b82f6_0%,#3b82f6_30%,#ef4444_80%,#ef4444_100%)] text-white px-4 py-2 rounded-full">
            Purchase
          </button>
        </div>
      </section>

      {/* Features Section - Use PricingTable component here */}
      <PricingTable />
    </div>
  );
};

export default PricingPage;
