import styled from "@emotion/styled";
import theme from "./styles/theme";

const Header = ({score}) => {
    return (
        <>
        <HeaderWrapper theme={theme}>
            <h1>동물의 숲 카드게임</h1>
            <h1>{score}/5</h1>
        </HeaderWrapper>
        </>
    );
}

export default Header;

const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 10rem;
background-color:${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.white};
`;