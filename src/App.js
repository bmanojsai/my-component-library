import React, { useState } from "react";
import { PrimaryButton, SecondaryButton, TritaryButton } from "./components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { ThemeProvider } from "styled-components";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Alter Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <SignUpModal showModal={showModal} setShowModal = {setShowModal} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
