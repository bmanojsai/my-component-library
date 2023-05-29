import styled from "styled-components";
import { typescale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size : ${typescale.helperText};
    padding : 8px;
    `,

  large: () => `
    font-size: ${typescale.header5};
    padding : 16px 24px;
    `,

  warning: ( props ) => `
    background-color : ${props.theme.status.warningColor};
    color : ${props.theme.textColorInverted};

    &:hover , &:focus {
        background-color : ${props.theme.status.warningColorHover};
        outline : 3px solid ${props.theme.status.warningColorHover};
    }

    &:active {
        background-color : ${props.theme.status.warningColorActive};
    }
    `,

  secondaryButtonWarning: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.warningColor};
        color : ${props.theme.status.warningColor}
    `,

  tritaryButtonWarning: (props) => `
    color : ${props.theme.status.warningColor};
    background : none;
    `,

  error: (props) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  secondaryButtonError: (props) => `
  background: none;
  border: 2px solid ${props.theme.status.errorColor};
  color : ${props.theme.status.errorColor}
`,
  tritaryButtonError: (props) => `
color : ${props.theme.status.errorColor};
background : none;
`,

  success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  secondaryButtonSuccess: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.successColor};
        color : ${props.theme.status.successColor}
`,
  tritaryButtonSuccess: (props) => `
    color : ${props.theme.status.successColor};
    background : none;
`,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typescale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  color: ${props => props.theme.textColorOnPrimary};

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: ${props => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorOnPrimary};
    border-color: ${props => props.theme.primaryColorActive};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.primaryColor};
  border: 3px solid ${props => props.theme.primaryColor};
  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
    border-color: ${props => props.theme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TritaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.primaryColor};
  border: none;
  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
