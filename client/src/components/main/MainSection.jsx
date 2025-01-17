// MainSection.js
import React from "react";
import MainWrap from "./MainWrap";
import Background from "../common/Background";
import MainSrogan from "./MainSlogan";

const MainSection = ({
  id,
  background,
  title,
  subTitle,
  intro1,
  intro2,
  intro3,
  paddingX,
  linkTo,
}) => {
  return (
    <div id={id}>
      <Background
        mainclassName=""
        divclassName=""
        style={{
          background,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <MainWrap
          mainTitle={title}
          subTitle={subTitle}
          intro1={intro1}
          intro2={intro2}
          intro3={intro3}
          paddingX={paddingX}
          linkTo={linkTo}
        />
        </Background>
        <MainSrogan/>
    </div>
  );
};

export default MainSection;
