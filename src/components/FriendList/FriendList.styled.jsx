import styled from "styled-components";

export const FriendListBox = styled.ul`

  margin-top: 10vh;
  padding: 0;
  list-style: none;
`;
export const ListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  margin-top: 2vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;
const setBgColor = props => {
  switch (props.bg) {
       case true:
    return '#146c4a';
    case false:
      return '#ba1d0e';
    default:
      return '#000'
  }
}
 
export const Status = styled.span`
  border-radius: 50%;
  margin: 1.7rem;
  height: 25px;
  width: 25px;
  background-color: ${setBgColor};
`;
export const Avatar = styled.img`
  margin: 0;
  
`;
export const Name = styled.p`
   
  font-weight: bold;
  font-size: 1.5rem;
`;