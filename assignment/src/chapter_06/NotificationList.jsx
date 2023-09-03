import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id:2,
        message: "오늘 점심은 카레입니다.",
    },
    {
        id:3,
        message: "미팅 시작 10분 전입니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);
        //앞으로 사용할 데이터 state에 넣어서 초기화    
        this.state={
            notifications: [],
        };
    }
    //생명주기 함수, setInterval 이용해 1초마다 정해진 작업 수행
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=> {
            //r.n에서 알림 데이터 하나씩 가져와서 state에있는 n배열에 넣어 업뎃
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                //state 업뎃
                this.setState({
                    notifications: notifications,
                });
            }else{
                //n 비우기
                this.setState({
                    notifications:[],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notifications) => {
                    return <Notification 
                    key={notifications.id}
                    id={notifications.id}
                    message={notifications.message}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;