import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setMovies } from '../../store/moviesSlise'
import { fetchMovies } from '../../services/fetchMovies'
import { customDebounce } from '../../utils/customDebounce'

export const useFetchMovies = (text, page) => {
  const dispatch = useDispatch()
  const debouncedFetchMovies = customDebounce(() => {
    dispatch(fetchMovies({ text, page }))
  }, 1000)
  useEffect(() => {
    if (text.trim()) {
      dispatch(setMovies([]))
      debouncedFetchMovies()
    }
    return () => {
      debouncedFetchMovies.cancel()
    }
  }, [text, page])
}
