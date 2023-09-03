import React from "react";

const students=[
    {
        id:1,
        name:"Hyunsoo"
    },
    {
        id:2,
        name:"Jungwon"
    },
    {
        id:3,
        name:"Seonghun"
    },
    {
        id:4,
        name:"Jay"
    },
];

function AttendanceBook(props){
    //학생들의 이름을 목록 형태로 출력
    return(
        //배열 렌더링 위한 맵, key 필수
        <ul>
            {students.map((student)=> {
                return <li key={student.id}> {student.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;