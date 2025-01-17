// 로그인 전 헤더 값

import React from "react";
import { Link } from "react-router-dom";

const HeaderOff = () => {
  return (
    <div className="flex">
      <ul className="flex text-[#F5634A] text-xl font-bold">
        {/* 로그인 */}
        <Link to="/login">
          <li className="flex items-center">
            <img
              className="flex pr-2.5 h-5"
              src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/vector.png"
              alt=""
            />
            <span className="Showcard-Gothic pr-8">Login</span>
          </li>
        </Link>

        {/* 회원가입 */}
        <Link to="/signup">
          <li>
            <span className="Showcard-Gothic">signup</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderOff;
