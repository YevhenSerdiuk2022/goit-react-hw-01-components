import PropTypes from 'prop-types';
import { CardStats, NameTitle, StatList, StatItem, Label, Percentage } from './Statistics.styled';

import {getRandomHexColor} from 'utils/getRandomHexColor';


export const Statistics = ({title, stats}) => {
    return (
        <CardStats>
         <NameTitle>{title}</NameTitle>
            <StatList>{stats.map(stat => (<StatItem key={stat.id}
          style={{
              backgroundColor: getRandomHexColor(),
            }} >
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}%</Percentage>
    </StatItem >))}
 
  </StatList>
        </CardStats>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};