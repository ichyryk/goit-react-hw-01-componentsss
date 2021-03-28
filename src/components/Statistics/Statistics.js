import React from 'react'
import PropTypes from 'prop-types'

const Statistics = ({ title, stats}) => (
<section class="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map(({ label, percentage, id}) => (
                 <li class="item" key={id}>
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
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