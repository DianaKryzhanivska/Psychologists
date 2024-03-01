import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 438px;

  @media only screen and (max-width: 375px) {
    width: 300px;
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
  line-height: 1.25em;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & span {
    color: red;
    font-size: 14px;
  }

  & input {
    padding: 16px 18px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};

    input::placeholder {
      color: ${({ theme }) => theme.colors.black};
      line-height: 1.25em;
    }
  }

  & input.error {
    border: 1px solid red;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;

export const Icon = styled.svg`
  position: absolute;
  right: 18px;
  bottom: 16px;
  stroke: black;
  fill: white;
`;

export const SubmitBtn = styled.button`
  font-size: 16px;
  padding: 16px 196px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 375px) {
    padding: 10px 20px;
  }
`;
