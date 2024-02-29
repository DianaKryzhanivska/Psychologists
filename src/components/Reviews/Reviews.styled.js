import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 48px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Reviewer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;

export const LetterBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.backgroundLightGreen};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.mainGreen};
  font-size: 20px;
  font-weight: 500;
  line-height: 1em;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  margin-bottom: 4px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & svg {
    fill: ${({ theme }) => theme.colors.star};
  }
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
`;

export const MeetingBtn = styled.button`
  background: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 30px;
  padding: 14px 32px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;
