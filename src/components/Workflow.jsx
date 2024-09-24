import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 border-b border-neutral-700 min-h-[700px]">
        <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-md font-medium px-2 py-1 upper">
          Working
        </span>
        </div>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-10 tracking-wide">
        Revolutionize your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          experience.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="px-20 py-3 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" width="400px"/>
        </div>
        <div className="pt-12 py-4 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;