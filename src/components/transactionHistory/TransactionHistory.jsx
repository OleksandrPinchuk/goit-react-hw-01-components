import PropTypes from 'prop-types';
import { chart, header, text, nuber, line} from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={chart}>
            <thead>
                <tr className={header}>
                    <th className={text}>Type</th>
                    <th className={text}>Amount</th>
                    <th className={text}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={line}>
                        <td className={nuber}>{type}</td>
                        <td className={nuber}>{amount}</td>
                        <td className={nuber}>{currency}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};