import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag>Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemData>
          December 04th, 2020 - x minutes of reading
        </S.PostItemData>
        <S.PostItemTitle>Text Gradients</S.PostItemTitle>
        <S.PostItemDescription>
          How to create text gradients in CSS.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
