import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAxios from "../../../hooks/useAxios";

const display =
  "flex justify-center items-center w-20 h-20 bg-white border rounded-full shadow my-8 ";

const Sidebar = ({ commentSectionRef, setFeedData, feedData }) => {
  const [like, setLike] = useState(feedData.likeYn || false);
  const [bookmark, setBookmark] = useState(feedData.bookMarkYn || false);
  const { feedId } = useParams();
  // 좋아요 상태에 대한 Axios Hook
  const [likeResponse, likeError, likeLoading, fetchLikeData] = useAxios({
    method: "PATCH",
    url: `/feed/${feedId}/feedLike`,
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  });

  // 북마크 상태에 대한 Axios Hook
  const [bookmarkResponse, bookmarkError, bookmarkLoading, fetchBookmarkData] = useAxios({
    method: "PATCH",
    url: `/feed/${feedId}/feedBookMark`,
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  });

  useEffect(() => {
    if (likeResponse) {
      setLike(likeResponse.data.data.likeYn);
    }
    if (likeError) {
      toast("좋아요 업데이트 실패");
    }
  }, [likeResponse, likeError]);

  useEffect(() => {
    if (bookmarkResponse) {
      setLike(bookmarkResponse.data.data.bookMarkYn);
    }
    if (bookmarkError) {
      toast("북마크 업데이트 실패");
    }
  }, [bookmarkResponse, bookmarkError]);

  const toggleLike = () => {
    fetchLikeData(); 
    setLike(!like);  
  };

  const toggleBookmark = () => {
    fetchBookmarkData(); 
    setBookmark(!bookmark); 
  };

  const scrollToComments = () => {
    if (commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast("링크가 복사되었습니다.");
      })
      .catch((err) => {
        toast("링크 복사에 실패했습니다.");
      });
  };

  return (
    <div className="hidden md:flex flex-col w-max h-0 sticky top-48 float-right mr-20 z-50">
      {/* 좋아요 */}
      <button className={display} onClick={toggleLike}>
        <img
          className="m-4"
          src={
            like
              ? "https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/heart-on.png"
              : "https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/heart-off.png"
          }
          alt="좋아요"
        />
      </button>

      {/* 북마크 */}
      <button className={display} onClick={toggleBookmark}>
        <img
          className="m-4"
          src={
            bookmark
              ? "https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/bookmark-on.png"
              : "https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/bookmark-off.png"
          }
          alt="북마크"
        />
      </button>

      {/* 댓글 */}
      <button className={display} onClick={scrollToComments}>
        <img
          className="m-5"
          src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/side-speech-bubble.png"
          alt="댓글"
        />
      </button>

      {/* 공유 */}
      <button className={`${display} pr-2.5`} onClick={linkShare}>
        <img
          className="m-4"
          src="https://homepagepictures.s3.ap-northeast-2.amazonaws.com/client/public/images/side-share.png"
          alt="공유"
        />
      </button>
    </div>
  );
};

export default Sidebar;
