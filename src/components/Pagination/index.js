import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
    {!isFirst && (
      <AniLink
        to={prevPages}
        cover
        direction="left"
        bg="var(--background)"
        duration={0.6}
      >
        Página Anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPages}
        cover
        direction="right"
        bg="var(--background)"
        duration={0.6}
      >
        Próxima Página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
