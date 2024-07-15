/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Image from "next/image";

const skillmages = [
  { src: "/images/skill/java-Light.svg", alt: "Java" },
  // { src: "/images/skill/next.svg", alt: "Next.js" },
  { src: "/images/skill/Spring-Light.svg", alt: "Spring" },
  { src: "/images/skill/React-Light.svg", alt: "React" },
  // { src: "/images/skill/vercel.svg", alt: "Vercel" },
  { src: "/images/skill/VueJS-Light.svg", alt: "Vue.js" },
];

const Welcome = (): JSX.Element => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <TitleBox>
        <p>
          식스티는 <span>정보보안 및 블록체인 전문기업</span>으로
        </p>
        <p>관련 솔루션을 보유하고 있습니다.</p>
        <p>
          또한 <span>고객의 요구에 의해 기술 자문 및 컨설팅</span>도 수행합니다.
        </p>
      </TitleBox>

      <TextMd>
        Our company is proud to offer specialized solutions in information
        security and blockchain technology. <br /> We also provide technical
        consulting services tailored to the customer’s needs.
      </TextMd>
    </Box>
  );
  // , nextJs, spring, vercel, vue
  const GridItemPartnersBlock = () => (
    <Box display="flex" flexWrap="wrap" justifyContent={"center"} width={1}>
      {skillmages.map((item: any, i: number) => (
        <Box maxWidth={80} width={1} marginTop={2} marginRight={4} key={i}>
          <Box
            component="img"
            height={1}
            width={1}
            src={item.src}
            alt={item.alt}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={"center"}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={"center"}
          >
            <GridItemPartnersBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;

const TitleBox = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 40px;

  span {
    color: #377dff;
    font-weight: 700;
  }
`;

const TextMd = styled.h5`
  text-align: center;
  margin-bottom: 5px;
  font-family: var(--lato);
  font-size: 20px;
  font-weight: 400;
`;
