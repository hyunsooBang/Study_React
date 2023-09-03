import React , { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount]=useCounter(0);
    //의존성 배열 ㄴ, 마운트 직후 호출, 컴포 업뎃시마다 호출
    useEffect(() => {
        console.log("============");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });
    //의존성 배열 ㅇ, 마운트 직후 호출, count값 바뀔때 호출, 용량상태 isFull state 저장
    useEffect(()=> {
        setIsFull(count>=MAX_CAPACITY);
        console.log(`현재 count value: ${count}`);
    },[count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;