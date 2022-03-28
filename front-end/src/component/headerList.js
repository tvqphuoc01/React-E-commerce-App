import React, {Component} from 'react';
import ListItem from './headerListItem';

class HeaderList extends Component {
    render() {
        const list = ["CALL: +0123 456 789", "ABOUT US", "CONTACT US", "LOGIN", "REGISTER"];
        const iconList = ['fas fa-phone pr-2', '', '', 'far fa-user pr-2', 'fa-solid fa-registered pr-2']
        const Links = ['/','/','/','/login', '/register']
        return(
            <div className='flex'>
                <div className='flex mr-auto ml-auto min-w-1/2 justify-end'>
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        {list.map((item, index) => <ListItem key={index} value={item} icon={iconList[index]} link={Links[index]}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderList