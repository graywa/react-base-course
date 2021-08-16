import React from 'react'
import MyButton from './UI/MyButton/MyButton'
import {useHistory} from 'react-router-dom'

const PostItem = ({removePost, post}) => {
  const router = useHistory()
  return (
      <div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title}</strong>
          <div style={{margin: '10px 15px 0 0'}}>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Open</MyButton>
          <MyButton onClick={() => removePost(post)}>Delete</MyButton>
        </div>
      </div>
  )
}

export default PostItem