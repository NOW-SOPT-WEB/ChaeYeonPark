import { handleClickReset } from "../utils/handleClickReset";

const Header = () => {

    return (
        <div>
            <h1>🔍 당신의 SOPTI는 무엇일까요?</h1>

            <button onClick={handleClickReset}>처음으로</button>
        </div>

    );
};

export default Header;