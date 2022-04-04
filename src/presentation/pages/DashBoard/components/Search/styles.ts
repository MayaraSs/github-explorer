import styled from "styled-components";

export const Form = styled.form`
  margin-top: 40px;
  width: 500px;
  display: flex;
  input {
    flex: 1;
    height: 66px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 90px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
  }
`;