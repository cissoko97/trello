import React from "react";
import './Header.style.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">{this.props.children}</div>
        )
    }

    componentDidMount() {
        console.log(this.props);
    }

}

export default Header;