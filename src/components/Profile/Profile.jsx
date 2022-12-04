import PropTypes from 'prop-types';

import { Card, CardDiscription ,Avatar, ProfileName, ProfileTag, ProfileLocation, Stats,FollowersList, ViewsList, LikesList, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats, }) => {
  return (
    <Card>
      <CardDiscription>
        <Avatar src={avatar} alt= "User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}l</ProfileLocation>
      </CardDiscription>

      <Stats>
        <FollowersList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </FollowersList>
        <ViewsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ViewsList>
        <LikesList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </LikesList> 
      </Stats>
    </Card>
  );
}

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }