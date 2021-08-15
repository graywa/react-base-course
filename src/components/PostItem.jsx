import React from 'react'
import MyButton from './UI/MyButton/MyButton'

const PostItem = ({removePost, post, number}) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>{number + 1}. {post.title}</strong>
          <div style={{marginTop: '10px'}}>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => removePost(post)}>Delete</MyButton>
        </div>
      </div>
  )
}

export default PostItem