import React, { Component } from "react";

import {
    Link
} from "react-router-dom";

class ListItem extends Component {
    render() {
        return(
            <li className="flex">
                <Link to={this.props.link} className="block py-2 pr-4 pl-3 text-gray-600 font-thin text-sm">
                    <i className={this.props.icon}></i>
                    {this.props.value}
                </Link>
            </li>
        )
    }
}

export default ListItem