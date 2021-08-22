import React from 'react'
import MySelect from './UI/MySelect'

const CountPost = ({limit, setLimit}) => {
  return (
    <MySelect
      value={limit}
      onChange={value => setLimit(value)}
      defaultValue='Show on page'
      options={[
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 15, name: '15'},
        {value: -1, name: 'all posts'}
      ]}
    />
  )
}

export default CountPost