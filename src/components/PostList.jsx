import React from 'react'
import PostItem from './PostItem'
import TransitionGroup from 'react-transition-group/cjs/TransitionGroup'
import CSSTransition from 'react-transition-group/cjs/CSSTransition'

const PostList = ({posts, title, removePost}) => {
  if (!posts.length) {
    return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => {
          return (
            <CSSTransition
              key={post.id}
              timeout={200}
              classNames="post"
            >
              <PostItem removePost={removePost} number={index}  post={post}/>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default PostList