import React, { useEffect } from 'react';
import loadable from '@loadable/component'
import PropTypes from 'prop-types';

const Icon = ({ icon, ...rest }) => {
    if(typeof(window) === 'undefined' || !window) return "";

    const Comp = loadable(() => import(`./set/${icon}`))
    return <Comp {...rest} />
}
Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}
export default Icon;