import React from "react";

const TipsInfo = ({ handleTipClick, item }) => {
  return (
    <div className="flex-col pt-2 mb-14">
      <div
        className="flex justify-center"
        onClick={() => handleTipClick(item.tipId)}
      >
        <span className="text-3xl font-bold my-3">{item.title}</span>
      </div>

      <div className="flex justify-between text-xl">
        <div className="flex">
          <div className="flex items-center mr-4">
            <img
              src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/Tips_like.png"
              alt="Tips_like"
              className="w-10 h-10 rounded-full mr-1"
            />
            <span className="ml-1 font-medium">{item.likeCount}</span>
          </div>
          <div className="flex items-center mr-4">
            <img
              src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/Tips_comment.png"
              alt="Tips_comment"
              className="w-10 h-10 rounded-full mr-1"
            />
            <span className="ml-1 font-medium">
              {item.replies ? item.replies.length : 0}
            </span>
          </div>
          <div className="flex items-center mr-4">
            <img
              src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/Tips_view.png"
              alt="Tips_view"
              className="w-10 h-10 rounded-full mr-1"
            />
            <span className="ml-1 font-medium">{item.views}</span>
          </div>
        </div>
        {/* 프로필 이동 로직 구현해야함*** */}
        <span className="flex items-center font-medium text-gray-800">
          {item.nickname}
        </span>
      </div>
    </div>
  );
};

export default TipsInfo;
