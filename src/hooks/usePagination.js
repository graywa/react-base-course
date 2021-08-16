import {useMemo} from 'react'

export const usePagination = (totalCountPages) => {
   const pagesArray = useMemo(() => {
    const resultArray = []
    for (let i = 0; i < totalCountPages; i++ ) {
      resultArray.push(i + 1)
    }
    return resultArray
  }, [totalCountPages])

  return pagesArray
}