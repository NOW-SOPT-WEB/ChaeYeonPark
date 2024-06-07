import styled from "styled-components";

//Header
export const HeaderLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderTitle = styled.h1`
    position: relative;
`

export const HeaderButton = styled.button`
    position: absolute;
    right: 2.7rem;
    width: 8rem;
    height: 2.8rem;
    background-color: #DABFFF;
    font-size: 1rem;
    border: none;
    border-radius: 0.7rem;

    &:hover {
        background-color: #C49AFF;
    }

`

//Content
export const ContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const SubContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

//Image
export const ImageWrapper = styled.img`
    width: 45rem;
    border-radius: 2rem;
`

//Button
export const ButtonWrapper = styled.button`
    width: 25rem;
    height: 25rem;
    background-color: #FFC8E6;
    font-size: 1.3rem;
    border: none;
    border-radius: 1rem;

    &:hover {
        background-color: #FF8FCB;
    }

    &:active,
    &:focus {
        background-color: #FF8FCB; /* 눌렀을 때와 포커스를 받았을 때의 색상 변화 */
    }
`

export const SubButtonWrapper = styled.button`
    width: 8rem;
    height: 2.8rem;
    background-color: #CDF1FF;
    font-size: 1rem;
    border: none;
    border-radius: 0.7rem;

    &:hover {
        background-color: #9BE1FD;
    }

    &:active,
    &:focus {
        background-color: #9BE1FD; /* 눌렀을 때와 포커스를 받았을 때의 색상 변화 */
    }
`

export const DisableSubButtonWrapper = styled.button`
    width: 8rem;
    height: 2.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.7rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
` 

//Count
export const CountWrapper = styled.h2`
    
`