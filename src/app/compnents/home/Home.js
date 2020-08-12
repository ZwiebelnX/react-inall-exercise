import React from 'react';
import './home.less';
import {Avatar, Col, Row} from "antd";
import 'antd/dist/antd.css'
import calculatorImg from '../../../images/calculator.png'
import timerImg from '../../../images/timer.png'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <Row justify={'center'}>
                <Col span={12}>
                    <Link to={'/calculator'}><Avatar size={256} src={calculatorImg} /></Link>
                </Col>
                <Col span={12}>
                    <Link to={'timer'}><Avatar size={256} src={timerImg} /></Link>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
