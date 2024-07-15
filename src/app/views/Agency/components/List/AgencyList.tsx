/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const TitleName = styled.h2`
  font-size: 95px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 40px;
  font-family: var(--lato);
  text-shadow: 2px 2px 2px gray;
  color: white;
`;

const TextMd = styled.h5`
  text-align: center;
  margin-bottom: 5px;
  font-family: var(--lato);
  font-size: 20px;
  font-weight: 400;
`;

const TextKor = styled.h5`
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 400;
`;

const TextEng = styled.h5`
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--lato);
`;

export function Technology() {
  return (
    <Box>
      <TitleName>Technology</TitleName>
      <TextKor>우리만의 혁신적인 기술로,</TextKor>
      <TextEng>With our innovative technology,</TextEng>
    </Box>
  );
}

export function Tireless(): JSX.Element {
  return (
    <Box>
      <TitleName>Tireless</TitleName>
      <TextKor>끊임없이 노력하며,</TextKor>
      <TextEng>We strive tirelessly,</TextEng>
    </Box>
  );
}

export function Thrive(): JSX.Element {
  return (
    <Box>
      <TitleName>Thrive</TitleName>
      <TextKor>항상 성장과 발전을 추구하고,</TextKor>
      <TextEng>to always pursue growth and advancement,</TextEng>
    </Box>
  );
}

export function Together(): JSX.Element {
  return (
    <Box>
      <TitleName>Together</TitleName>
      <TextKor>협력하여 더 큰 성과를 이루며,</TextKor>
      <TextEng>
        we actively seek collaboration to achieve greater success,
      </TextEng>
    </Box>
  );
}

export function Think(): JSX.Element {
  return (
    <Box>
      <TitleName>Think</TitleName>
      <TextKor>고객의 입장에서 생각하고,</TextKor>
      <TextEng>think from the customer's perspective,</TextEng>
    </Box>
  );
}

export function Trust(): JSX.Element {
  return (
    <Box>
      <TitleName>Trust</TitleName>
      <TextKor>신뢰할 수 있는 기업이 되겠습니다.</TextKor>
      <TextEng> we promise to become your trusted companion.</TextEng>
    </Box>
  );
}
