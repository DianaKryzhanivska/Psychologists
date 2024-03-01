import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 472px;

  @media only screen and (max-width: 375px) {
    width: 300px;
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: -0.8px;
  margin-bottom: 20px;

  @media only screen and (max-width: 375px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
  margin-bottom: 40px;
`;

export const Psychologist = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;

  & img {
    width: 44px;
    height: 44px;
    border-radius: 15px;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33em;
  margin-bottom: 4px;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & input {
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }

  & input.error {
    border: 1px solid red;
  }

  & span {
    color: red;
    font-size: 14px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  gap: 8px;

  & input {
    width: 232px;
  }
`;

export const InputComment = styled.input`
  height: 116px;
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 30px;
  padding: 16px 217px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;

  @media only screen and (max-width: 375px) {
    padding: 10px 20px;
  }
`;
