import PropTypes from 'prop-types';

import { TableTransactionHistory, RowHeaders, RowVolues, ColumnHeader, Column } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
       <TableTransactionHistory>
  <RowHeaders>
    <RowVolues>
      <ColumnHeader>Type</ColumnHeader>
      <ColumnHeader>Amount</ColumnHeader>
      <ColumnHeader>Currency</ColumnHeader>
    </RowVolues>
  </RowHeaders>
    <tbody>{items.map(item => (
       <RowVolues key={item.id}>
        <Column>{item.type}</Column>
        <Column>{item.amount}</Column>
        <Column>{item.currency}</Column>
       </RowVolues>
     ))}
    
    </tbody>
</TableTransactionHistory>
   ) 
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.number.isRequired,

        })
    ).isRequired,
};