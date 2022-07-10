import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import { useGlobalContext } from './context'

const App = () => {
  const data = useGlobalContext()
  return (
    <>
    <div>hihihihi  {data} </div>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App