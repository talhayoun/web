import React, { useState } from 'react';
import {BsSuitHeartFill} from 'react-icons/bs'
const Heart = () => {

    const [classN, setClassN] = useState("white");
    const handleClickHeart = () => {
        setClassN(currentClass => currentClass === "white" ? "red" : "white");
    }

    return(
        <BsSuitHeartFill
        className="heart"
        color={classN}
        onClick={handleClickHeart}
        style={{stroke: "#191970", strokeWidth: "0.5px"}}
         />
    );
};

export default Heart;
