import React, {useMemo} from 'react'
import MyInput from './UI/MyInput/MyInput'
import MySelect from './UI/MySelect'

const PostFilter = ({filter, setFilter}) => {

  return (
    <div>
      <MyInput
        placeholder='Search'
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='sort by'
        options={[
          {value: 'title', name: 'title'},
          {value: 'body', name: 'description'},
        ]}
      />
    </div>
  )
}

export default PostFilter