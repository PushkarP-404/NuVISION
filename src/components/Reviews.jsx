import { reviews } from "../constants";

const Reviews = () => {
  return (
    <div className="mt-20 tracking-wide">
    <div className="text-center">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-md font-medium px-2 py-1 upper">
        Reviews
      </span></div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((reviews, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{reviews.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={reviews.image}
                  alt=""
                />
                <div>
                  <h6>{reviews.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {reviews.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;