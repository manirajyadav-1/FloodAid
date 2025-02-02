const ReviewCard = ({ userInfo }) => {
  const { userPhoto, userName, location, review } = userInfo;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
      <p className="text-gray-600 text-lg italic mb-4">“{review}”</p>
      <div className="flex flex-col items-center">
        <img
          src={userPhoto}
          alt={userName}
          className="w-20 h-20 rounded-full object-cover shadow-md"
        />
        <p className="text-xl font-semibold text-gray-800 mt-3">{userName}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
