const scaleNames={
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    //props로 scale과 temp를 받아서 표시, 변경시 onTempchange해 상위 컴포넌트로 전달
    return(
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;