import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
    render() {
        const { to } = this.props;
        return (
            <a href={to}>
            
            </a>
        )

    }


}