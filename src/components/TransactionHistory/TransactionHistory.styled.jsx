import styled from 'styled-components';


export const TableTransactionHistory = styled.table`
 margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const RowHeaders = styled.thead`
  font-size: 1.5rem;
  text-align: center;
`;
;

export const ColumnHeader = styled.th`
  width: 30%;
  padding: 1rem 5rem;
  background-color: #02bbd7;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  :first-child {
  border-radius: 0.5rem 0 0 0;
  };
 :last-child {
  border-radius: 0 0.5rem 0 0;
}
}
`;
export const Column = styled.th`
 padding: 1rem 5rem;

`

export const RowVolues = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;

 
 :nth-child(even) {
  background-color: #f2f2f2;
}

`;