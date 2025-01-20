import { useEffect, useState } from "react";
import reviewBg from "../assets/review-bg.jpg";

export default function Review() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      quote:
        "Archia Designs delivered beyond our expectations. Their design was functional and elegant!",
      author: "Zechariah Lewis",
      position: "Designer",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/testimonial-3.png",
    },
    {
      quote:
        "A perfect blend of creativity and professionalism. Highly recommended!",
      author: "Samantha Williams",
      position: "Homeowner",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-8.jpg",
    },
    {
      quote:
        "Their consultation and execution process made our dream home a reality.",
      author: "John Doe",
      position: "Architect",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-4.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5s transition interval

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="bg-[#f1f1f1] ">
      <div className="md:pb-28 pb-10 relative">
        <img
          src={reviewBg}
          alt="Review Background Image"
          className="lg:h-[500px] md:h-[600px] md:w-[65%] h-[300px] w-full"
        />
        <div className="md:absolute md:top-10 md:left-[55%] relative md:bottom-auto bottom-10 mx-5 md:right-5 bg-white shadow-lg space-y-5 md:space-y-7 p-12 md:max-w-[500px] min-h-[400px]">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            TESTIMONIALS
          </h4>
          <h1 className="md:text-5xl text-4xl  text-black  font-semibold ">
            What Client Says
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide italic">
            &quot;{reviews[currentReview].quote}&quot;
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={reviews[currentReview].image}
              alt={reviews[currentReview].author}
              className="w-[70px] h-[70px] rounded-full"
              loading="lazy"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {reviews[currentReview].author}
              </h2>
              <h3 className="text-[#d2ac6e]">
                {reviews[currentReview].position}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
