import React from "react";
import PropTypes from 'prop-types';
import { ListGroupItem, Media } from 'reactstrap';
import './comment.scss';

/**
 * Renders a comment on the video comments list
 */
const Comment = (props) => (
    <ListGroupItem className="comment">
        <Media>
            <Media left>
                <Media object className="comment__img" src={props.img} alt={props.name} />
            </Media>
            <Media body>
                <Media heading className="comment__name">
                    {props.name}
                </Media>
                <p className="comment__text">{props.comment}</p>
            </Media>
        </Media>
    </ListGroupItem>
)

Comment.propTypes = {
    /** Name of the user that commented */
    name: PropTypes.string.isRequired,
    /** Image route of the user that commented */
    img: PropTypes.string.isRequired,
    /** comment in plain text of the user that commented */
    comment: PropTypes.string.isRequired
};

export default Comment;