import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="python" numOfPage={300}/>
            <Book name="python2" numOfPage={400}/>
            <Book name="python3" numOfPage={500}/>
        </div>
    );
}

export default Library;