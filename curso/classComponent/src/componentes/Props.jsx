import Recat from 'react';
import PropTypes from 'prop-types';

const Props = (props) => {

    return (
        <>
            <h2>{props.mensaje}</h2>
        </>
    );
};

Props.defaultProps= {
    mensaje: 'MSG Default',
}

Props.propTypes = {
    mensaje: PropTypes.string.isRequired,
}

export default Props;