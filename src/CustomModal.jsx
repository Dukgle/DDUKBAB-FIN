import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

function CustomModal(props) {
    const { isOpen, onRequestClose, contentLabel, className } = props;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className={className}
        >
            {props.children}
        </Modal>
    );
}

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    contentLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomModal;
