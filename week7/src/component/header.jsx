import { handleClickReset } from "../utils/handleClickReset";
import { HeaderLayout, HeaderTitle, HeaderButton } from "../styles/styledComponent";

const Header = () => {

    return (
        <HeaderLayout>
            <HeaderTitle>🔍 당신의 SOPTI는 무엇일까요?</HeaderTitle>
            <HeaderButton onClick={handleClickReset}>처음으로</HeaderButton>
        </HeaderLayout>

    );
};

export default Header;