import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .content {
    display: flex;
    justify-content: center;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  margin: 40px;
  flex-direction: column;
  padding: 5px 20px;

  .content-profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .avatar {
    width: 80px;
    border-radius: 100px;
  }

  .icon {
    width: 30px;
  }

  span {
    font-weight: 600;
    font-family: monospace;
    color: #24292f;
    font-size: 16px;
  }
`;

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
