import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { item, condition, offline, online, icon } from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={item} key={id}>
            <span className={clsx(condition,
                { [offline]: !isOnline, [online]: isOnline, }
        )}>{isOnline}</span>
            <img className={icon} src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    };

