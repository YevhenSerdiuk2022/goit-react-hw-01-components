import styled from 'styled-components';


export const CardStats = styled.section`
  max-width: 50%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;
export const NameTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
  
`;

export const StatItem = styled.li`
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      font-size: 1.5rem;
      text-align: center;
      border-top: 1px solid #d3d5e3;
      background-color:#212121 ;
     :first-child{border-radius:0 0 0 0.5rem };
     :last-child{border-radius:0 0 0.5rem 0 };
`;
   

export const Label = styled.span`
  padding-top: 1.3rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;
export const Percentage = styled.span`
padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;