import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPages,
  nextPages,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPages}>Página Anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPages}>Próxima Página</Link>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPages: propTypes.string,
  nextPages: propTypes.string,
}

export default Pagination
