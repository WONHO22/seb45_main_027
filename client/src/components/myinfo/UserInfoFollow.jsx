import { useState } from "react";
import UserInfoFollowList from "./UserInfoFollowList";

const UserInfoFollow = () => {

  const [followingList, setFollowingList] = useState([
    { id: 1, username: "User1", profileImage: "./images/Hanjun.png", isFollowing: true },
    { id: 2, username: "User2", profileImage: "./images/Sunho.png", isFollowing: true },
    { id: 3, username: "User3", profileImage: "./images/Hanjun.png", isFollowing: true },
    { id: 4, username: "User4", profileImage: "./images/Sunho.png", isFollowing: true },
    { id: 5, username: "User5", profileImage: "./images/Hanjun.png", isFollowing: true },
    { id: 6, username: "User6", profileImage: "./images/Sunho.png", isFollowing: true },
    { id: 7, username: "User7", profileImage: "./images/Hanjun.png", isFollowing: true },
    { id: 8, username: "User8", profileImage: "./images/Sunho.png", isFollowing: true },
  ]);

  const [followersList, setFollowersList] = useState([
    { id: 1, username: "User1", profileImage: "./images/Yuri.png", isFollowing: false },
    { id: 2, username: "User2", profileImage: "./images/Dusan.png", isFollowing: true },
  ]);


  const handleFollowingList = (userId) => {
    const newFollowingList = followingList.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          isFollowing: !user.isFollowing,
        };
      }
      return user;
    });
    setFollowingList(newFollowingList);
    console.log(`Unfollow user with ID ${userId}`);
  };

  const handleFollowersList = (userId) => {
    const newFollowersList = followersList.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          isFollowing: !user.isFollowing,
        };
      }
      return user;
    });
    setFollowersList(newFollowersList);
    console.log(`Follow user with ID ${userId}`);
  };


  const [activeTab, setActiveTab] = useState("following");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="flex flex-row md:justify-center p-2 mb-6 text-[#525252] font-medium">
        <button
          className={`flex items-center text-base ${
            activeTab === "following" ? "text-[#00647B]" : ""
          }`}
          onClick={() => handleTabChange("following")}
        >
          <div className="p-2 hover:rounded-full">
            Following
          </div>
          <div>{followingList.length}</div>
        </button>
        <button className={`flex items-center text-base ${
            activeTab === "followers" ? "text-[#00647B]" : ""
          }`}
          onClick={() => handleTabChange("followers")}>
          <div className="ml-4 p-2 hover:rounded-full">
            Followers
          </div>
          <div>{followersList.length}</div>
        </button>
      </div>
      <div
        className="md:mb-10 md:h-[300px] overflow-auto xl:w-[250px]"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        {activeTab === "following" && <UserInfoFollowList userList={followingList} handleFollowingList={(userId) => handleFollowingList(userId)} />}
        {activeTab === "followers" && <UserInfoFollowList userList={followersList} handleFollowersList={(userId) => handleFollowersList(userId)}/>}
      </div>
    </div>
  );
};

export default UserInfoFollow;
