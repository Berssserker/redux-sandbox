import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Search } from '../../components/Search'
import { MovieList } from '../../components/MovieList'
import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { useFetchMovies } from '../../hooks/useFetchMovies/useFetchMovies'

export const GeneralList = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState(1)
  const { status, error } = useSelector((state) => state.movies)
  useFetchMovies(text, page)
  return (
    <>
      <Search text={text} setText={setText} setPage={setPage} />
      {status === 'loading' && <Loading />}
      {status === 'rejected' && <ErrorMessage error={error} />}
      <MovieList />
      <Footer page={page} setPage={setPage} />
    </>
  )
}
