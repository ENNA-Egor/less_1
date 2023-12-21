import React from "react";
import PostCard from "./PostCard";


const PostCards =()=>{
    return(
        <div className="cards">
            <div>
            <PostCard  name='Egor' color="red" age='63' city = 'Domodedovo' year ='1960'/>
            </div>
            <div>
            <PostCard  name='Ilya' color="blue" age='10' city = 'Vostriakovo' year ='2013'/>
            </div>
            <div>
            <PostCard  name='Andrey' color="green" age='14' city = 'Vostriakovo' year ='2009'/>
            </div>
            <div>
            <PostCard  name='Dimon' color={'rgb(100, 150, 20)'} age='16' city = 'Vostriakovo' year ='2007'/>
            </div>
        </div>
    )
}


export default PostCards;