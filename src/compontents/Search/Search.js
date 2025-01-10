import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'

import { fetchMovies } from '../../store/moviesSlise'

import './Search.css'

export const Search = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const onSearch = (value) => {
    setText(value)
  }

  useEffect(() => {
    dispatch(fetchMovies(text))
  }, [text])
  return <Input size="large" value={text} placeholder="Type to search..." onChange={(e) => onSearch(e.target.value)} />
}
