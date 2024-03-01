import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 226px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  & p {
    color: ${({ theme }) => theme.colors.boldGray};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28em;
  }
`;
