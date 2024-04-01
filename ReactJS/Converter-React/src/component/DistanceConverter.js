import { useState } from "react";

function DistanceConverter(){
    const [kilometers, setKilometers] = useState(0);
    const [miles, setMiles] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handlerKilometers = (event) => {
        const kilometersVal = event.target.value;
        setKilometers(kilometersVal)
//        setMiles(Math.round((kilometersVal*0.621371)*10)/10);
        setMiles((kilometersVal*0.621371).toFixed(1));
    }
    const handlerMiles = (event) => {
        const milesVal = event.target.value;
        setMiles(milesVal)
        setKilometers((milesVal / 0.621371).toFixed(1));
//        setKilometers(Math.round((milesVal/0.621371)/10)/10);

    }
    const resetVal = () => {
        setKilometers(0);
        setMiles(0);
    }
    const flip = () => {
        setFlipped(!flipped);
    }

    return(
        <>
            <h1>Distance Converter</h1>
            <label>킬로미터 : </label>
            <input type="number" 
                onChange={handlerKilometers}
                disabled={flipped}
                value={kilometers}
            />
            <br />
            <label>마일 : </label>
            <input type="number" 
                onChange={handlerMiles}
                disabled={!flipped}
                value={miles}
            />
            <br />
            <button onClick={resetVal}>리셋</button>
            <button onClick={flip}>전환</button>
        </>
    )
}

export default DistanceConverter;