// import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../default-image.jpeg';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats}) => (
<div className={styles.profile}>
    <div className={styles.description}>
    <img
               src={avatar}
                alt={name}
        className={styles.avatar}
                width={280}
    />
      <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={styles.stats}>
      <li className={styles.item}>
        <span className='label'>Followers: </span>
        <span className={styles.quantity}>{stats.followers}</span>
    </li>
      <li className={styles.item}>
      <span className="label">Views: </span>
        <span className={styles.quantity}>{stats.views}</span>
    </li>
      <li className={styles.item}>
      <span className="label">Likes: </span>
        <span className={styles.quantity}>{stats.likes}</span>
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

