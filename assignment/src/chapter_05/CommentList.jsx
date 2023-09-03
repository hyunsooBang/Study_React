import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "방현수",
        comment: "안녕하세요, 수방입니다.",
    },
    {
        name: "양정원",
        comment: "엔하이픈의 Bite me 좋네요..",
    },
    {
        name: "박성훈",
        comment: "리액트 재미있어요 ㅎㅎ 짱",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;