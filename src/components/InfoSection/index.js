import React from "react";
import { Button } from "../ButtonElement";
import Formulario1 from "../../documentos/formulario-afiliacion.docx";
import img from "../../images/svg-2.png";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  NavBtn,
  NavBtnLink
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
<<<<<<< HEAD
                  <Button
                    to="perfil"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
=======
                <NavBtn>
                <NavBtnLink 
                    href= {Formulario1} download="formulario"> Descargar Formulario
                </NavBtnLink> {/*Aquí dirigir al formulario  */} 
                </NavBtn>
>>>>>>> dd20093ab457122af536765c200e38f7958be728
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img src={img}/>
            </ImgWrap> 
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
