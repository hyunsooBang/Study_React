import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }
    //메시지 id와 함께 생명주기함수 로그 출력
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnMount() called.`);
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>  
            
        );
    }
}
export default Notification;