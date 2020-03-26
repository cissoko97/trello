import React from "react";
import './listComponentMenu.style.css';

const ListContentMenu = React.forwardRef((props, ref) => (
    <div ref={ref} className="ListContentMenu">
        Bonjour
    </div>
))

export default ListContentMenu;