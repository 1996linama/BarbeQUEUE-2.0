import React, {Children} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const GrayButton = styled.button`
    outline: none;
    width: 150px;
    padding: 0.25rem;
    border: 1px dotted #eee;
    display: block;
`

function Button(props) {
    let button = (
        <GrayButton href={props.href} onClick={props.onClick}>
            {Children.toArray(props.children)}
        </GrayButton>
    )

    if(props.handleRoute) {
        button = (
            <button onClick={props.handleRoute}>
                {Children.toArray(props.children)}
            </button>
        )
    }
    return button;
}

Button.propTypes= {
    href: PropTypes.string,
    handleRoute: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;