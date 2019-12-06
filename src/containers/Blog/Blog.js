import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state ={
        posts: [],
        selectedId: null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const post = response.data.slice(0, 4);
            
            const updatedPosts = post.map(post =>{
                return {
                    ...post,
                    author: 'Emmanuel'
                };
            })
            console.log(updatedPosts);
          this.setState({posts: updatedPosts});
          //  console.log(response.data);
        });
    }

    postSelectedHandler =  (id) => {
      this.setState({selectedId: id});
    };

    render () {
        const posts = this.state.posts.map(pKey => {
          return <Post 
          title={pKey.title}
          author={pKey.author}
          key={pKey.id}
          clicked = {() => this.postSelectedHandler(pKey.id)}
          />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                    id={this.state.selectedId} 
                    post={this.state.posts[]}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;