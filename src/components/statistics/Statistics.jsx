import PropTypes from 'prop-types';
import { randomHexColor } from 'utils/randomHexColor.js';
import { statistics, head, list, item, label} from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={statistics}>
            {title && <h2 className={head}>{title}</h2>}
            <ul className={list}>
                {stats.map(stat => (
                    <li className={item} key={stat.id} style={{ backgroundColor: randomHexColor() }}>
                        <span className={label}>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            })
        ),
};