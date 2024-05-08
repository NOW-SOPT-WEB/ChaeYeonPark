import { Global, ThemeProvider } from '@emotion/react';
import { useState, useEffect } from "react";
import globalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";
import styled from "@emotion/styled";
import Header from "./Header"
import CardTable from "./CardTable";
import Modal from "./Modal";



function App() {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (score === 5) {
      setShowModal(true);
    }
  }, [score]);

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload()
  };

  const matchScore = () => {
    setScore((prev) => prev+1)
  }
  
  return (
    <>
    <Global styles={globalStyle} />
    <ThemeProvider theme = {theme}>
      <ContentWrapper>
        <Header score = {score}/>
        <CardTable matchScore = {matchScore} />
      </ContentWrapper>
        {showModal && <Modal onClickClose={handleCloseModal} />}
    </ThemeProvider>
    </>
  );
}

export default App;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`