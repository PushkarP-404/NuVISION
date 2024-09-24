import { ArrowRight } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 border-b border-neutral-700 min-h-[600px]">
    <div className="text-center">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-md font-medium px-2 py-1 upper">
        Pricing
      </span></div>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight"> First month offer!</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <ArrowRight />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-600 border border-orange-900 rounded-lg transition duration-200">
                Buy Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;