import React, { useEffect } from 'react'
import { useGlobalContext } from './context'


const Stories = () => {
  const {hits, isLoading } = useGlobalContext();


if(isLoading) {
  return <>
  <h1>Loading...</h1>
  </>
}
  return (
    <>
      <h2>My Techh News Post</h2>
      {hits.map((curPost)=> {
        return (
          <h2>{curPost.title}</h2>
        )
      })}
    </>
  )
}

export default Stories