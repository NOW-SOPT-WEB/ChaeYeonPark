import { Global, ThemeProvider } from '@emotion/react';
import { useState, useEffect } from "react";
import globalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
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
  
  return (
    <>
    <Global styles={globalStyle} />
    <ThemeProvider theme = {theme}>
        <Header score={score}/>
        <CardTable setScore={setScore} />
        {showModal && <Modal onClose={handleCloseModal} />}
    </ThemeProvider>
    </>
  );
}

export default App;
