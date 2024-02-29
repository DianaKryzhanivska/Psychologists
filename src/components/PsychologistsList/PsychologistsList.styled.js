import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 64px;
  padding-bottom: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Item = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  display: flex;
  gap: 24px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 120px;
  width: auto;
  height: 120px;
  border-radius: 30px;
  border: 2px solid rgba(84, 190, 150, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    min-width: 96px;
    width: auto;
    height: 96px;
    border-radius: 15px;
    object-fit: cover;
  }

  & svg {
    position: absolute;
    top: 9px;
    right: 14px;
    fill: ${({ theme }) => theme.colors.green};
  }
`;

export const ItemInfo = styled.div`
  width: 992px;
`;

export const Job = styled.p`
  color: ${({ theme }) => theme.colors.boldGray};
  font-weight: 500;
  line-height: 1.5em;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 24px;
`;

export const Features = styled.ul`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  & li {
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.backgroundGray};
    border-radius: 24px;
    font-weight: 500;
    line-height: 1.5em;
    color: ${({ theme }) => theme.colors.boldGray};

    & span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  line-height: 1.25em;
  margin-bottom: 14px;
`;

export const ReadMoreBtn = styled.button`
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  text-decoration-line: underline;
`;

export const Statistics = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.5em;

  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Rating = styled.p`
  margin-left: 8px;
  margin-right: 16px;
`;

export const Price = styled.p`
  margin-left: 16px;
  margin-right: 28px;
`;
