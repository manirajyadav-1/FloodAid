import ReviewCard from "./ReviewCard";
import userPhoto1 from "../../assets/potrait2.jpg";
import userPhoto2 from "../../assets/potrait3.jpg";
import userPhoto3 from "../../assets/potrait4.png";

const reviews = [
  {
    userPhoto: userPhoto1,
    userName: "Aarav Patel",
    location: "Vijayawada | India",
    review:
      "During the heavy floods in Vijayawada, I was stranded with no place to go. This platform helped me find a safe shelter and connect with others in similar situations. A true lifesaver!",
  },
  {
    userPhoto: userPhoto2,
    userName: "Meera Sharma",
    location: "Assam | India",
    review:
      "Floods in Assam have always been a challenge, but with this website, I was able to find emergency contacts and coordinate with volunteers for food and shelter. A much-needed initiative!",
  },
  {
    userPhoto: userPhoto3,
    userName: "Rohan Das",
    location: "Bihar | India",
    review:
      "The annual flooding in Bihar made it difficult to find safe accommodations. Thanks to this platform, I was able to connect with a family offering shelter. It truly made a difference in my life.",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-8xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
        What People Say About Us
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((user, index) => (
          <ReviewCard key={index} userInfo={user} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
