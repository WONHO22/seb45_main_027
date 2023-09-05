import React from "react";

const MyInfoLike = ({ imgSrc, title, itemId, toggleLike, isLiked }) => {
  const handleToggleLike = () => {
    toggleLike(itemId);
  };

  return (
    <div className="m-4 h-full w-[140px] md:w-[180px] ">
      <div className="relative">
        <img
          className="rounded-lg object-cover w-[140px] h-[130px] md:w-[180px] md:h-[170px]"
          src={imgSrc}
          alt="content"
        />
        <button
          onClick={handleToggleLike}
          className="absolute bottom-3.5 right-3.5 cursor-pointer"
        >
          <img
            src={
              isLiked ? "./images/isLiked.png" : "./images/emptyHeart.png"
            }
            alt="Like"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </button>
      </div>
      <div className="flex flex-col items-center md:mb-4">
        <div className="text-2xl p-2 mx-1 break-all">{title}</div>
      </div>
    </div>
  );
};

export default MyInfoLike;