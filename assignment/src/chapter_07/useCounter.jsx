import React , { useState } from "react";

//초기 count값 파라미터로 받아 count state 생성
function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = ()=> setCount((count)=>count+1);
    //카운트 값이 0 아래로 못내려가게 설정
    const decreaseCount = ()=> setCount((count)=>Math.max(count-1,0));

    return [count, increaseCount, decreaseCount];

}

export default useCounter;