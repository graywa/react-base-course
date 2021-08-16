import React from 'react'
import {usePagination} from '../../../hooks/usePagination'

const Pagination = ({changePage, page, totalCountPages}) => {

  const pagesArray = usePagination(totalCountPages)

  return (
    <div className="page__wrapper">
      {pagesArray.map(p => {
        return <span
          className={p === page ? 'page page-current': 'page'}
          key={p}
          onClick={() => changePage(p)}>
            {p}
          </span>
      })}
    </div>
  )
}

export default Pagination