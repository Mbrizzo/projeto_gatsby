import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <S.ProfileWrapper>
        <S.ProfileLink
          to="/"
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    )}
  />
)

export default Profile
