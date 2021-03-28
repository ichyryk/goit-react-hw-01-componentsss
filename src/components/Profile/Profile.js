import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../default-image.jpeg';

const Profile = ({ name, tag, location, avatar, stats}) => (
<div class="profile">
  <div class="description">
    <img
               src={avatar}
                alt={name}
                class="avatar"
                width={280}
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers: </span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views: </span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes: </span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
)

Profile.defaultProps = {
    avatar: defaultImage,
    stats: { followers: 0, views: 0, likes: 0}
}

Profile.propTypes = {
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        liked: PropTypes.number.isRequired,
    }),
}

export default Profile;

