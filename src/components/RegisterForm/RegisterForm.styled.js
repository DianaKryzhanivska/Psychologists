import styled from 'styled-components';

export const SubmitBtn = styled.button`
  font-size: 16px;
  padding: 16px 189px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 375px) {
    padding: 10px 20px;
  }
`;
