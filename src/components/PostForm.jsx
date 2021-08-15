import React, {useState} from 'react'
import MyInput from './UI/MyInput/MyInput'
import MyButton from './UI/MyButton/MyButton'

const PostForm = ({createPost}) => {

  const [post, setPost] = useState({title: '', body: ''})

  const addTitle = (e) => {
    setPost({...post, title: e.target.value})
  }

  const addDescription = (e) => {
    setPost({...post, body: e.target.value})
  }

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {id: Date.now(), ...post}
    createPost(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput value={post.title} onChange={addTitle} type="text" placeholder='Title of post'/>
      <MyInput value={post.body} onChange={addDescription} type="text" placeholder='Description of post'/>
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  )
}

export default PostForm