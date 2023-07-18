import PropTypes from 'prop-types';
import {profile, description, avatarImg, name, list, item, identification, adress, label, quantity } from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
            <div className={profile}>
                <div className={description}>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={avatarImg}
                    />
                <p className={name}>{username}</p>
                    <p className={identification}>@{tag}</p>
                    <p className={adress}>{location}</p>
                </div>

                <ul className={list}>
                    <li className={item}>
                        <span className={label}>Followers</span>
                        <span className={quantity}>{stats.followers}</span>
                    </li>
                    <li className={item}>
                        <span className={label}>Views</span>
                        <span className={quantity}>{stats.views}</span>
                    </li>
                    <li className={item}>
                        <span className={label}>Likes</span>
                        <span className={quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
    );
};  


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}
