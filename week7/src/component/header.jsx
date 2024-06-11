import { HeaderLayout, HeaderTitle, HeaderButton } from "../styles/styledComponent";
import PropTypes from 'prop-types';

const Header = ({method}) => {

    const handleClickReset = () => {
        window.location.reload();
    }

    return (
        <HeaderLayout>
            <HeaderTitle>🔍 당신의 SOPTI는 무엇일까요?</HeaderTitle>
            { method
            ? <HeaderButton onClick={handleClickReset}>처음으로</HeaderButton>
            : null
            }
        </HeaderLayout>

    );
};

Header.propTypes = {
    method: PropTypes.number.isRequired
};

export default Header;

