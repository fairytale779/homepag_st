import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const TitleNm = styled.h2`
  font-size: 95px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 40px;
  font-family: var(--lato);
  /* text-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff; */
  /* text-shadow: 0 0 60px #fff, 0 0 100px #fff, 0 0 150px #fff, 0 0 180px #fff,
    0 0 151px #fff; */
  color: #fff;
  text-transform: uppercase;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  span {
    background: radial-gradient(
      circle at 100%,
      #4a8fff,
      #377dff 50%,
      #5a9aff 75%,
      #377dff 75%
    );
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 1s linear infinite;
  }
`;

const TextNm = styled.h5`
  text-align: center;
  color: #fff;

  font-weight: 400;
  margin-bottom: 5px;

  &.kor {
    font-size: 24px;
  }

  &.eng {
    font-size: 16px;
    font-family: var(--lato);
  }
`;

const Section = ({ title, textKor, textEng }: any) => {
  const firstChar = title.charAt(0);
  const restOfTitle = title.slice(1);
  return (
    <Box>
      <TitleNm>
        <span>{firstChar}</span>
        {restOfTitle}
      </TitleNm>
      <TextNm className="kor">{textKor}</TextNm>
      <TextNm className="eng">{textEng}</TextNm>
    </Box>
  );
};

export function Technology() {
  return (
    <Section
      title="Technology"
      textKor="우리만의 혁신적인 기술로,"
      textEng="With our innovative technology,"
    />
  );
}

export function Tireless() {
  return (
    <Section
      title="Tireless"
      textKor="끊임없이 노력하며,"
      textEng="We strive tirelessly,"
    />
  );
}

export function Thrive() {
  return (
    <Section
      title="Thrive"
      textKor="항상 성장과 발전을 추구하고,"
      textEng="to always pursue growth and advancement,"
    />
  );
}

export function Together() {
  return (
    <Section
      title="Together"
      textKor="협력하여 더 큰 성과를 이루며,"
      textEng="we actively seek collaboration to achieve greater success,"
    />
  );
}

export function Think() {
  return (
    <Section
      title="Think"
      textKor="고객의 입장에서 생각하고,"
      textEng="think from the customer's perspective,"
    />
  );
}

export function Trust() {
  return (
    <Section
      title="Trust"
      textKor="신뢰할 수 있는 기업이 되겠습니다."
      textEng="we promise to become your trusted companion."
    />
  );
}

//CS
const TitleName = styled.h2`
  font-size: 95px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 40px;
  font-family: var(--lato);
  // text-shadow: 2px 2px 2px gray;
  color: white;

  span {
    color: #1a335f;
  }
`;

const Text = styled.h5`
  text-align: center;
  color: white;
  font-family: var(--lato);
  font-weight: 400;
  margin-bottom: 5px;

  &.kor {
    font-size: 24px;
  }

  &.eng {
    font-size: 16px;
  }
`;
