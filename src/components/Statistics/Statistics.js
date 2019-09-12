import React from 'react';
import PropTypes from 'prop-types';
import './statistics.scss';
/**
 * Renders statistics data on page
 */
const Statistics = (props) => (
    <div className="statistics">
    <h3 className="statistics__title">Statistics:</h3>
        <div>
            <p>Views: {props.statistics.viewCount}</p>
            <p>likes: {props.statistics.likeCount}</p>
            <p>Dislikes: {props.statistics.dislikeCount}</p>
        </div>
    </div>
)

Statistics.propTypes = {
    /** statistics object with viewCount, likeCount and dislikeCount */
    statistics: PropTypes.object.isRequired,
};

export default Statistics;