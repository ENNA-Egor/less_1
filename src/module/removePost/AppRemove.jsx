import React, { Component } from 'react';
import { Posts } from './Posts';

class AppRemove extends Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'Recat JS' },
        ],
    };

    removePost = (id)=>{
        this.setState ({ posts:this.state.posts.filter(post => post.id !== id)})
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="AppRemove">
                <Posts posts={posts}  removePost={this.removePost}/>
            </div>
        );
    }
}

export default AppRemove;