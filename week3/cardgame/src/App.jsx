import Header from "./Header"
import { Global, css } from '@emotion/react';
import styled from "@emotion/styled"
import { useState, useEffect } from "react";
import theme from "./styles/theme";
import CardTable from "./CardTable";
import Modal from "./Modal";

const globalStyles = css`
    body {
      margin: 0rem;
      background-color: ${({theme}) => theme.colors.white};
    }
`;



function App() {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (score === 5) {
      setShowModal(true);
    }
  }, [score]);
  
  return (
    <>
    <Global styles={globalStyles} /> {/* 전역 스타일 적용 */}
    <Header score={score}/>
    <CardTable setScore={setScore} />
    {showModal && <Modal />}
    </>
  );
}

export default App;
