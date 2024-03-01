import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 64px;
  padding-bottom: 100px;

  @media only screen and (max-width: 375px) {
    padding-top: 32px;
    padding-bottom: 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`;

export const LoadMoreBtn = styled.button`
  background: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 30px;
  padding: 14px 48px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;
