import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  height: 100%;
  padding: 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 15rem;
  margin-bottom: 8rem;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(20rem, 100%);
  background-color: #ffffff;
`;
