import React, { Component } from "react";
import './Header.style.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">Bonjour depuis le menu</div>
        )
    }

}

export default Header;