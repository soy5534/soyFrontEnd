import { useState } from "react";
import TimeConverter from "./TimeConverter";
import DistanceConverter from "./DistanceConverter";

function Select(){
    const [menuIndex, setMenuIndex] = useState(0);
    const handlerSelect = (event) => {
        // console.log(event.target.value);
        const optVal = event.target.value;
        setMenuIndex(optVal);
    }
    return (
        <div>
            <select onChange={handlerSelect}>
                <option value="0">컨버터 선택</option>
                <option value="1">시간 컨버터</option>
                <option value="2">거리 컨버터</option>
            </select>
            {menuIndex === '0' ? <h2>컨버터를 선택해주세요.</h2> : null} 
            {menuIndex === '1' ? <h2><TimeConverter /></h2> : null}
            {menuIndex === '2' ? <h2><DistanceConverter /></h2> : null}
        </div>
    )
}

export default Select;