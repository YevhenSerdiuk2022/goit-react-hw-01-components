import PropTypes from 'prop-types';


import { FriendListBox } from './FriendList.styled';
import { FriendListItem } from 'components/FriendList/FriendListItem'

export const FriendList = ({friends }) => {
    return (
      <FriendListBox>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.name}
                ></FriendListItem>
       ))}
      </FriendListBox>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};