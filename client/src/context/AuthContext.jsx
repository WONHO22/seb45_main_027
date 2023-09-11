import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  // const baseURL =
  //   "http://ec2-3-39-231-102.ap-northeast-2.compute.amazonaws.com:8080";

  const baseURL = process.env.REACT_APP_API_URL;


  // useEffect(() => {
  //   // 엑세스토큰 체크하고 리프레시토큰 받아오는 부분
  //   async function checkAuthStatus() {
  //     const storedAccessToken = localStorage.getItem("accessToken");
  //     const storedRefreshToken = localStorage.getItem("refreshToken");

  //     // 로컬스토리지안에 저장되어 있는 엑세스 토큰이 있을때만 아래코드 실행
  //     if (storedAccessToken) {
  //       axios.defaults.headers.common[
  //         "Authorization"
  //       ] = `Bearer ${storedAccessToken}`;
  //      // 엑세스토큰을 매 요청시 헤더에 싣는부분

  //       try {
  //         // 가지고 있는 엑세스토큰이 유효한지 확인
  //         await axios.get(`${baseURL}/auth/check-auth`);
  //       } catch (error) {
  //         if (
  //           error.response &&
  //           error.response.status === 400 &&
  //           storedRefreshToken
  //         ) {
  //           // 엑세스토큰이 만료되었고 리프레시토큰만 있을때, 가지고 있는 리프레시 토큰으로 다시 엑세스토큰 받아옴
  //           try {
  //             const refreshResponse = await axios.post(
  //               `${baseURL}/auth/refresh-token`,
  //               {
  //                 refreshToken: storedRefreshToken,
  //               }
  //             );

  //             // 새로 받은 엑세스토큰을 Axios 헤더에 기본값으로 넣고, 로컬스토리지에도 저장함
  //             const newAccessToken = refreshResponse.data.accessToken;
  //             localStorage.setItem("accessToken", newAccessToken);
  //             axios.defaults.headers.common[
  //               "Authorization"
  //             ] = `Bearer ${newAccessToken}`;
  //           } catch (refreshError) {
  //             // 리프레시 토큰 사용 실패했을때
  //             console.error("Token refresh failed:", refreshError);
  //             //navigate("/login");
  //           }
  //         } else {
  //           // 또 다른 오류들이나 리프레시토큰이 만료됐을때
  //           console.error("Authentication error:", error);
  //           //navigate("/login");
  //         }
  //       }

  //   }

  //   checkAuthStatus();
  // }, [navigate]);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedAccessToken}`;
    } else {
      //403 리프레시토큰보내기, 액세스1시간 리프레시2주
    }
  }, [navigate]);

  async function login(email, password) {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });
      console.log(response);

      const match = response.data.match(/{member-id} : (\d+)/);
      if (match) {
        const memberIdValue = match[1];
        console.log(memberIdValue);
        setUser(memberIdValue);
        localStorage.setItem("memberId", memberIdValue);
      } else {
        console.error("Value not found");
      }

      localStorage.setItem("accessToken", response.headers["authorization"]);
      localStorage.setItem(
        "refreshToken",
        response.headers["authorization-refresh"]
      );
      navigate("/");
    } catch (error) {
      //불일치시 401에러
      //인증완료되지 않은 이메일 처리도 해야됨 403주면 인증페이지로 보내기
      // if (error.response.status === 403) {
      //   alert("이메일 인증을 완료해주세요.");
      //   //navigate("/verify"); 
      // } else {
        console.error("Login failed:", error);
        alert("Login failed");
        throw error;
      //}
    }
  }

  async function kakaoLogin(code) {
    try {
      const response = await axios.get(
        `${baseURL}/auth/oauth/kakao?code=${code}`
      );

      //어디서 보낸건지 서버에서 알고 싶다면 이런 방법도 있다
      // const requestData = {
      //   code,
      //   provider: "kakao",
      // };
      // const response = await axios.post(`${baseURL}/auth/oauth`, requestData);

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/");
    } catch (error) {
      console.log(code);

      throw error;
    }
  }

  async function naverLogin(code) {
    try {
      const response = await axios.get(
        `${baseURL}/auth/oauth/kakao?code=${code}`
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/");
    } catch (error) {
      console.log(code);

      throw error;
    }
  }

  async function register(email, nickname, password) {
    try {
      await axios.post(`${baseURL}/auth/signup`, {
        email,
        nickname,
        password,
      });

      //navigate("/verify");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Signup failed");
      throw error;
    }
  }

  async function logout() {
    try {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("memberId");
      setUser(null);

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed");
      throw error;
    }
  }

  const value = {
    user,
    setUser,
    login,
    register,
    logout,
    kakaoLogin,
    naverLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
