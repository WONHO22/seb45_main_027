import React from 'react';

const MainSlogan = () => {
    return (
      <div className="flex md:hidden bg-[#FFFAEE] h-20 w-full  items-center overflow-hidden">
        <div className="h-full w-full animate-slogan font-extrabold text-3xl flex shadow-2xl">
          <img
            src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/slogan.png"
            alt="인테리어 추천 커뮤니티"
          />
          <img
            src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/slogan.png"
            alt="인테리어 추천 커뮤니티"
          />
          <img
            src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/slogan.png"
            alt="인테리어 추천 커뮤니티"
          />
          <img
            src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/slogan.png"
            alt="인테리어 추천 커뮤니티"
          />
        </div>
      </div>
    );
};

export default MainSlogan;