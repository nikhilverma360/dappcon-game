"use client";
import React from "react";
import styled from "styled-components";
import { darkTheme } from "@kleros/ui-components-library";
import KlerosLogo from "@/assets/kleros-pink.svg";
import LightLinkButton from "@/components/LightLinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  text-align: center;
  gap: 26px;
`;

const Heading = styled.h2`
  font-weight: 400;
`;

const StyledH2 = styled.h2`
  font-weight: 400;
  color: ${darkTheme.klerosUIComponentsPrimaryBlue};
`;

const StyledText = styled.p`
  font-weight: 200;
`;

const StyledLinkButton = styled(LightLinkButton)`
  width: 100%;
`;

const LogoContainer = styled.div`
  display: "flex";
  justifycontent: "center";
`;

const About: React.FC = () => {
  return (
    <Container>
      <StyledText>About</StyledText>
      <LogoContainer>
        <KlerosLogo />
      </LogoContainer>
      <Heading>
        Kleros is a decentralized arbitration service for the disputes of the
        new economy.
      </Heading>
      <StyledText>
        As the economy becomes global and digital, disputes arise in many areas
        that cannot be solved by courts or traditional arbitration systems.
        Kleros can solve them in a fast, affordable and secure way.
      </StyledText>
      <StyledText>
        Blockchain and game theory bring fast, affordable and fair decisions.
      </StyledText>
      <StyledH2>Integrate your Platform</StyledH2>
      <StyledLinkButton url="https://kleros.io/" text="Learn More" />
    </Container>
  );
};

export default About;
