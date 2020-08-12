import React from "react";
import  propTypes  from 'prop-types'
import {Button} from "antd";
import 'antd/dist/antd.css'
import './CalculatorButton.less'


class CalculatorButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className='calculator-button'>
                <Button className='cal-button' type='primary'  onClick={() => this.props.addFun(this.props.name)}>{this.props.name}</Button>
            </div>
        );
    }
}

CalculatorButton.propTypes = {
    name: propTypes.string,
    addFun: propTypes.func
};

export default CalculatorButton;
