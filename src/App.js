import React, {useEffect, useMemo, useState} from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/MyButton/MyButton'
import MyInput from './components/UI/MyInput/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/MySelect'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService'


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [isPostsLoad, setIsPostsLoad] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoad(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoad(false)
    }, 1000)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Add user</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm createPost={createPost}/></MyModal>
      <hr style={{margin: '20px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr style={{margin: '20px 0'}}/>
      {isPostsLoad
        ? <h1>Is downloading...</h1>
        : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='List of posts 1' />
      }
    </div>

  )
}

export default App



