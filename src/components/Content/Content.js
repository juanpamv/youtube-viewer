import React from 'react';
import './content.scss';

const Content = (props) => {
    return <React.Fragment>
        {props.children}
    </React.Fragment>
}

export default Content;