import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () => '#' + Math.random().toString(16).substr(2, 6);

const Statistics = ({ title, stats}) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statlist}>
            {stats.map(({ label, percentage, id}) => (
                <li className={styles.item}
                    key={id}
                    style={{ backgroundColor: randomColor(), }}>
                    <span className="label">{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            ))}
  </ul>
</section>
)

Statistics.defaultProp = {
    title: '',
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default Statistics;