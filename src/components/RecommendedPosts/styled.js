import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solidvar(--borders);
  border-top: 1px solidvar(--borders);
  background: var(--mediumBackground);
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--higlight);
  display: flex;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solidvar(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
