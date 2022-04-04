import styled from "styled-components";

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

