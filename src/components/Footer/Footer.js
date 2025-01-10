import { Pagination } from 'antd'
import './Footer.css'

export const Footer = ({ page, setPage }) => {
  const switchingPage = (value) => {
    setPage(value)
  }

  return <Pagination align="center" current={page} total={50} onChange={switchingPage} />
}
