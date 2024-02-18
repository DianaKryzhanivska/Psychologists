import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.mainGreen};
`;

export const LoginBtn = styled.button`
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
`;
