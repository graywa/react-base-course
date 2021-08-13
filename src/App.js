import React, {useMemo, useState} from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './App.css'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/MyButton'
import MyInput from './components/UI/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/MySelect'
import PostFilter from './components/PostFilter'


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', description: 'JS is amasing'},
    {id: 2, title: 'Python', description: 'JS is cool'},
    {id: 3, title: 'Java', description: 'JS is not bad'},
    {id: 4, title: 'C++', description: 'JS is wonderful'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) return [...posts].sort( (a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    return posts
  }, [posts, filter.sort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
    console.log(post)
  }

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <hr style={{margin: '20px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='List of posts 1' />
    </div>

  )
}

export default App



