import React, {useState} from 'react'
import MyInput from './UI/MyInput'
import MyButton from './UI/MyButton'

const PostForm = ({createPost}) => {

  const [post, setPost] = useState({title: '', description: ''})

  const addTitle = (e) => {
    setPost({...post, title: e.target.value})
  }

  const addDescription = (e) => {
    setPost({...post, description: e.target.value})
  }

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {id: Date.now(), ...post}
    createPost(newPost)
    setPost({title: '', description: ''})
  }

  return (
    <form>
      <MyInput value={post.title} onChange={addTitle} type="text" placeholder='Title of post'/>
      <MyInput value={post.description} onChange={addDescription} type="text" placeholder='Description of post'/>
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  )
}

export default PostForm