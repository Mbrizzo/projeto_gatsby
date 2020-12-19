import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solidvar(--borders);
  color: var(--texts);
  display: flex;
  padding: 2.5rem 5rem;
  justify-content: space-between;

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--higlight);
    }
  }
`
