import React from "react";
import styled from "styled-components";
import { typescale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";
import {useSpring, animated} from "react-spring";


const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;
const CloseModalButton = styled.button`
  curser: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  height: 24px;
  width: 24px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typescale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typescale.paragraph};
  max-width: 70%;
  text-align: center;
`;
export const SignUpModal = ({showModal, setShowModal}) => {

    const animation = useSpring({
        opacity : showModal ? 1 : 0,
        transform : showModal ? `translateY(0)` : `translateX(-200%)`
    })


  return (
    <animated.div style={animation}>
    <ModalWrapper>
      <img
        src={Illustrations.signup}
        alt="sign up for an account"
        aria-hidden={true}
      />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to get access!</SignUpText>
      <PrimaryButton>Sign up!</PrimaryButton>
      <CloseModalButton aria-label="close button" onClick = {() => setShowModal(false)}>
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
    </animated.div>
  );
};
