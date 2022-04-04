import * as S from './styles';

const Main = ({
  title = 'Setup Project Frontend',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/vercel.svg"
      alt="Imagem de logomarca da Vercel - que é um triângulo"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/next.svg"
      alt="Imagem de logomarca do framework NextJS - que é a letra dentro de um círculo"
    />
  </S.Wrapper>
);

export default Main;
