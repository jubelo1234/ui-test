import ArrowLink from "@/components/arrowLink";
import Clients from "@/app/sections/clients";
import ServiceGrid from "@/app/sections/serviceGrid";
import Services from "@/app/sections/services";
import BlogGrid from "./sections/blogGrid";
import SubscribeSection from "./sections/subscribeSection";
import HeroText from "./sections/heroText";

export default function Home() {
  return (
    <>
      <section className="w-screen h-[500px] md:h-[542px] laptop:!h-[101vh] laptop:max-h-[742px] laptop:min-h-[500px] flex items-center bg-text-dark pt-[66.4px] tablet:pt-[78.4px]">
        <div className="w-[92vw] md:w-[93vw] max-w-web-max mx-auto">
          <HeroText />
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section className="  py-9 tablet:py-[60px] lg:py-[90px]">
        <div className=" w-[92vw] md:w-[93vw]  max-w-web-max mx-auto flex  justify-between items-center flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-[5%] laptop:!gap-[10%]">
          <div className="flex-grow space-y-4 sm:space-y-6">
            <h2 className="font-chronicle text-[#323C40] text-3xl sm:text-4xl leading-tight font-bold">
              Nigeria’s Leading Financial Services Group
              <span className="text-cord-red">.</span>
            </h2>
            <p className="text-text text-base leading-[26px] ">
              Cordros is licensed as Broker Dealer, Issuing House,
              Fund/Portfolio Managers, Trustees, Registrars and Insurance
              Brokers by The Nigerian Exchange Limited (NGX), the Securities &
              Exchange Commission (SEC) and the National Insurance Commission
              (NAICOM).
            </p>
            <div className=" w-fit">
              <ArrowLink title="Learn more" />
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center py-8 lg:h-[220px] min-w-full lg:min-w-[320px] laptop:!min-w-[360px] border border-[#ECECEC]">
            <h1 className="font-bodoni font-bold text-[40px] sm:text-[48px] text-text-dark">
              ₦290B
            </h1>
            <h4 className="text-sm text-text-dark">Assets Under Management</h4>
            <p className="text-xs text-text pt-1">As of October 31, 2024</p>
          </div>
        </div>
        <div className=" mt-8 sm:mt-11 lg:mt-[70px]">
          <div className="w-[92vw] md:w-[93vw]  max-w-web-max mx-auto">
            <h4 className="text-text text-[13px] mb-5 uppercase tracking-[0.1em]">
              Trusted by the finest
            </h4>
          </div>
          <Clients />
        </div>
      </section>
      <section>
        <ServiceGrid />
      </section>
      <section className="  py-9 tablet:pt-[60px] tablet:pb-[40px] lg:pt-[90px] lg:pb-[70px] w-[92vw] md:w-[93vw]  max-w-web-max mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-y-1 gap-2">
          <h3 className="text-text-dark font-chronicle font-bold text-xl sm:text-2xl lg:text-[32px] lg:leading-[40px]">
            The Latest Insights from Cordros.
          </h3>
          <ArrowLink title="See more insights" />
        </div>
        <div className="mt-5 sm:mt-9 lg:mt-11 laptop:!mt-14">
          <BlogGrid />
        </div>
      </section>
      <section>
        <SubscribeSection />
      </section>
    </>
  );
}
