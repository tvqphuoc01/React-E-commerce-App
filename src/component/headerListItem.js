import React, { Component } from "react";

class ListItem extends Component {
    render() {
        return(
            <li className="flex">
                <a href='#' className="block py-2 pr-4 pl-3 text-gray-600 font-thin text-sm">
                    <i className={this.props.icon}></i>
                    {this.props.value}
                </a>
            </li>
        )
    }
}

export default ListItem