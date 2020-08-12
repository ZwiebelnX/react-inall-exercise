import React from "react";
import './Header.less'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className='header'>
                <h1 className='text'>Chen</h1>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
