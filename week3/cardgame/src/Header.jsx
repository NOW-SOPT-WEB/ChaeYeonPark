import styled from "@emotion/styled";
import { theme } from "./styles/theme";

const Header = ({score}) => {
    return (
        <HeaderWrapper>
            <TitleWrapper>동물의 숲 카드게임</TitleWrapper>
            <TextWrapper>{score}/5</TextWrapper>
        </HeaderWrapper>
    );
}

export default Header;


const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 3rem;
    width: 100%;
    height: 15rem;
    background-color:${({theme}) => theme.colors.green};

    font-family: TTLaundryGothicB;
    @font-face {
        font-family: 'TTLaundryGothicB';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

`;

const TitleWrapper = styled.h1`
    color: ${({theme}) => theme.colors.white};
    padding-top: 2rem;
    margin-bottom: 0rem;
    font-size: 4rem;
`;

const TextWrapper = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.coffee};
`;