"use client";

import * as S from "./styles";

const ImageScroll: React.FC = () => {
  return (
    <S.ScrollContainer>
      <S.ScrollImage src="/assets/imageScroll/scroll-home.png" alt="Scroll" />
    </S.ScrollContainer>
  );
};

export default ImageScroll;
