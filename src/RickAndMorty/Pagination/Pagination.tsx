import * as React from "react"
import { useCharactersContext } from '../CharactersContext'

const Pagination = () => {
  const { pagesInfo: { pages, next}, setPage } = useCharactersContext()

  const pageLinkHandler = (pageNumber: Number) => (
    () => setPage(pageNumber)
  )

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        {[...Array(pages)].map((_, index) => {
          const pageNumber = index + 1
          const currentPage = (index + 1) === (next! - 1)
          const active = currentPage ? 'active' : ''

          return (<li key={index} className={`page-item ${active}`}>
            <a className="page-link" onClick={pageLinkHandler(pageNumber)}>{pageNumber}</a>
            { currentPage && <span className="sr-only">(current)</span> }
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Pagination
