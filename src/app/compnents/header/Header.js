import React from "react";
import './Header.less'
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className='header'>
                <h1 className='text'>Chen</h1>
                <ul className={'nav-bar'}>
                    <li><NavLink to='/calculator' className='nav-item' activeClass='active'>计算器</NavLink></li>
                    <li><NavLink to='/timer' className='nav-item' activeClass='active'>计时器</NavLink></li>
                </ul>
            </div>

        );
    }
}

Header.propTypes = {};

export default Header;
