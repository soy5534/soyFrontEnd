import { useState } from "react"; // ?


function TimeConverter(){
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handlerMinutes = (event) => {
        const minVal = event.target.value;
        setMinutes(minVal)
        setHours(Math.round((minVal/60)*100)/100);
    }
    const handlerHours = (event) => {
        const hourVal = event.target.value;
        setHours(hourVal)
        setMinutes(hourVal*60);
    }
    const resetVal = () => {
        setMinutes(0);
        setHours(0);
    }
    const flip = () => {
        setFlipped(!flipped);
    }
    return (
        <> 
            <h1>Time Converter</h1>
            <label>분 : </label>
            <input type="number" 
                onChange={handlerMinutes}
                min="0"
                disabled={flipped}
                value={minutes} /> <br />
            <label>시간 : </label>
            <input type="number"
                onChange={handlerHours}
                min="0"
                disabled={!flipped}
                 value={hours}/> <br />
            <button onClick={resetVal}>리셋</button>
            <button onClick={flip}>전환</button>
        </>
    )
}

// nodeJS의 모듈 시스템 적용
export default TimeConverter;