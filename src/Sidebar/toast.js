import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AutohideExample() {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
        <button className='activity-btn' onClick={() => setShow(true)} >Activity Completed</button>
        </Row>
    );
}

export default AutohideExample;