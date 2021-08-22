import React, {useEffect, useMemo, useRef, useState} from 'react'
import '../styles/App.css'
import {getPagesCount} from '../utils/pages'
import PostService from '../API/PostService'
import {useFetching} from '../hooks/useFetching'
import {usePosts} from '../hooks/usePosts'
import PostFilter from '../components/PostFilter'
import Loader from '../components/UI/Loader/Loader'
import PostList from '../components/PostList'
import Pagination from '../components/UI/Pagination/Pagination'
import PostForm from '../components/PostForm'
import MyButton from '../components/UI/MyButton/MyButton'
import MyModal from '../components/UI/MyModal/MyModal'
import {useObserver} from '../hooks/useObserver'
import CountPost from '../components/CountPost'

function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalCountPages, setTotalCountPages] = useState(0)
  const [fetchPosts, isPostsLoad, postsError] = useFetching(async() => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCountPosts = response.headers['x-total-count']
    setTotalCountPages(getPagesCount(totalCountPosts, limit))
  })
  const lastElement = useRef()

  useObserver(lastElement, page < totalCountPages, isPostsLoad, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const changePage = (page) => {
    setPage(page)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm createPost={createPost}/></MyModal>
      <hr style={{margin: '20px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      <CountPost limit={limit} setLimit={setLimit}/>
      <hr style={{margin: '20px 0'}}/>
      {postsError && <h3 style={{color: 'darkred'}}>downloding error: {postsError}</h3>}
      {isPostsLoad && <div><Loader /></div>}
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='- List of posts 1 -' />
      <div ref={lastElement}></div>
      <Pagination page={page} changePage={changePage} totalCountPages={totalCountPages}/>
    </div>
  )
}

export default Posts



