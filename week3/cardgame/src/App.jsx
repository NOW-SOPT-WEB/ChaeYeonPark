import Header from "./Header"
import CardGame from "./CardGame"
import { Global, css } from '@emotion/react';
import styled from "@emotion/styled"
import theme from "./styles/theme";

const globalStyles = css`
    body {
      margin: 0rem;
      background-color: ${({theme}) => theme.colors.white};
    }
`;

const CardGameWapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

function App() {
  
  return (
    <>
    <Global styles={globalStyles} /> {/* 전역 스타일 적용 */}
    <Header />
    <CardGameWapper>
      <CardGame />
    </CardGameWapper>
    </>
  );
}

export default App;
