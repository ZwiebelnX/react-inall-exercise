import {Button, Col, message, Row} from "antd";
import React from "react";
import './Calculator.less'
import CalculatorButton from "./CalculatorButton";
import {Link} from "react-router-dom";
import InfoDisplayer from "../utils/InfoDisplayer";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formula: '',
        };

        this.handleAddNumber = (text) => {
            switch (text) {
                case '=':
                    this.setState({formula: eval(this.state.formula)})
                    break;
                case 'C':
                    this.setState({formula: ''})
                    break;
                case '+':
                case '-':
                case '*':
                    if (/^\d*(\\+|\\-|\\*)\d*$/.test(this.state.formula)) {
                        this.setState({formula: this.state.formula + text})
                    } else {
                        message.error('非法输入')
                    }
                    break;
                default:
                    this.setState({formula: this.state.formula + text})
            }
        }


    }

    render() {
        return (
            <div>
                <div style={{width: '30%', margin: 'auto'}}>
                    <Row justify={'center'}>
                        <Col span={24}>
                            <InfoDisplayer info={this.state.formula} placeholder={'please enter formula'} />
                        </Col>
                    </Row>
                    <Row className='button-container' justify={'space-between'}>
                        <Col span={5}><CalculatorButton name={'1'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'2'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'3'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'+'} addFun={this.handleAddNumber} /></Col>
                    </Row>
                    <Row className='button-container' justify={'space-between'}>
                        <Col span={5}><CalculatorButton name={'4'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'5'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'6'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'-'} addFun={this.handleAddNumber} /></Col>
                    </Row>
                    <Row className='button-container' justify={'space-between'}>
                        <Col span={5}><CalculatorButton name={'7'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'8'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'9'} addFun={this.handleAddNumber} /></Col>
                        <Col span={5}><CalculatorButton name={'*'} addFun={this.handleAddNumber} /></Col>
                    </Row>
                    <Row className='button-container' justify={'space-between'}>
                        <Col span={5}><CalculatorButton name={'C'} addFun={this.handleAddNumber} /></Col>
                        <Col span={10}>
                            <Link to={'/'}>
                                <Button type='danger' style={{width: '100%', height: '100%', fontSize: '2em'}}>B A C K</Button>
                            </Link>
                        </Col>
                        <Col span={5}><CalculatorButton name={'='} addFun={this.handleAddNumber} /></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Calculator.propTypes = {};

export default Calculator;
