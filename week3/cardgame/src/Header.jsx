import styled from "@emotion/styled";
import theme from "./styles/theme";

function Header() {
    return (
        <>
        <HeaderWrapper theme={theme}>
            <h1>동물의 숲 카드게임</h1>
        </HeaderWrapper>
        </>
    );
}

export default Header;

const HeaderWrapper = styled.div`
width: 100%;
height: 10rem;
background-color:${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.white};

`;