import styled from '@emotion/styled';

export const ContactItemStyle = styled.li`
  display: flex;
  margin-top: 10px;
  gap: 40px;
  justify-content: space-between;
`;

export const ButtonStyle = styled.button`
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 5px grey;
  transition: all 250ms ease-in-out;
  :hover {
    background-color: #a9a9a9;
  }
`;

export const Info = styled.p`
  font-weight: 600;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 5px 5px 5px grey;
`;
