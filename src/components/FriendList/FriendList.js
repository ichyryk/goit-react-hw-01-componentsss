import React from 'react'
import PropTypes from 'prop-types'

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li className="item" key={id}>
                <span></span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
            </li>
        ))}
</ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendList;