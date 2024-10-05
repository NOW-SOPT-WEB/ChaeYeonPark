import styled from 'styled-components';
import { useState } from 'react';
import InputContainer from '../styles/InputContainer';
import InputWrapper from '../styles/InputWrapper';
import TextWapper from '../styles/TextWrapper';
import message from '../utils/message';

const Toggle = () => {
    const [prevPw, setPrevPw] = useState('');
    const [newPw, setNewPw] = useState('');
    const [newPwVerification, setNewPwVerification] = useState('');

    /* handleChanegePw : 비밀번호 변경을 관리하는 함수, patch로 서버와 통신 */
    const handleChangePw = async () => {
        if (!prevPw || !newPw || !newPwVerification) {
            alert(message.MESSAGE.messageFullPw);
            return;
        }

        const pwdChangeData = {
            previousPassword: prevPw,
            newPassword: newPw,
            newPasswordVerification: newPwVerification,
        };

        try {
            const response = await axios.patch(
                'http://34.64.233.12:8080/member/password',
                { pwdChangeData },
                {
                    headers: {
                        memberId: id,
                    },
                },
            );

            if (response.status === 200) {
                alert(message.MESSAGE.messageChangePw);
            }
        } catch (error) {
            console.error('Error: ', error);
            alert(error.response.data.message);
        }
    };

    return (
        <ToggleLayout>
            <InputContainer>
                <TextWapper>기존 비밀번호</TextWapper>
                <InputWrapper type="text" value={prevPw} onChange={(e) => setPrevPw(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>새로운 비밀번호</TextWapper>
                <InputWrapper type="text" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
            </InputContainer>
            <InputContainer>
                <TextWapper>비밀번호 확인</TextWapper>
                <InputWrapper
                    type="text"
                    value={newPwVerification}
                    onChange={(e) => setNewPwVerification(e.target.value)}
                />
            </InputContainer>
            <ChangeButtonWapper onClick={handleChangePw}>비밀번호 변경</ChangeButtonWapper>
        </ToggleLayout>
    );
};

export default Toggle;

const ToggleLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #e5e3df;
`;

const ChangeButtonWapper = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: #b6b6b6;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        background-color: black;
    }
`;
