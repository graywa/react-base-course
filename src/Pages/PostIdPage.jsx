import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useFetching} from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
  const params = useParams()

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchingPostById, isLoading, error] = useFetching(async(id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchingComments, isCommentsLoading, commError] = useFetching(async(id) => {
    const response = await PostService.getComments(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchingPostById(params.id)
  }, [])

  useEffect(() => {
    fetchingComments(params.id)
  }, [])

  return (
    <div className='App'>
      <h1>Page of user with ID = {params.id}</h1>
      {
      isLoading
        ? <Loader/>
        : <div>{post.id} {post.title}</div>
      }
      <h1>Comments</h1>      
      {
        isCommentsLoading
        ? <Loader/>
        : <div>
          {comments.map(comm => {
            return (
              <div key={comm.id} style={{marginTop: '15px'}}>
                <h4>{comm.email}</h4>
                <div>{comm.body}</div>
              </div>              
            )            
          })}
        </div>
      }

    </div>
  )
}

export default PostIdPage