import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

import Container from "@/app/components/Container";
import { Contact, Process, Reviews, Welcome } from "./components";
import {
  Technology,
  Think,
  Thrive,
  Tireless,
  Together,
  Trust,
} from "./components/List/AgencyList";

const Agency = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`)!;
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: "smooth" });
    });
  };

  const theme = useTheme();

  const styles = (bgImage: string) =>
    ({
      position: "absolute",
      objectFit: "cover",
      /* support for plugin https://github.com/bfred-it/object-fit-images */
      fontFamily: "object-fit: cover;",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundImage: `url(${bgImage})`,
      filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
    } as const);

  return (
    <Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Welcome />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo("agency__portfolio-item--js-scroll")}
                  sx={{ cursor: "pointer" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_01.jpg")} />
        <Container>
          <Technology />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_02.jpg")} />
        <Container>
          <Tireless />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Process />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_03.jpg")} />
        <Container>
          <Thrive />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_04.jpg")} />
        <Container>
          <Together />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_05.jpg")} />
        <Container>
          <Think />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={"jarallax-img"} sx={styles("/images/main_06.jpg")} />
        <Container>
          <Trust />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Agency;
