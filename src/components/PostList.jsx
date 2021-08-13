import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, title, removePost}) => {
  if (!posts.length) {
    return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem removePost={removePost} number={index} key={post.id} post={post}/>
        )
      })}
    </div>
  )
}

export default PostList