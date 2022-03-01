import React, {Component} from 'react';
import ListItem from './headerListItem';

class HeaderList extends Component {
    render() {
        const list = ["CALL: +0123 456 789", "ABOUT US", "CONTACT US", "LOGIN"];
        const iconList = ['far fa-phone pr-2', '', '', 'far fa-user pr-2']
        return(
            <div className='flex'>
                <div className='flex mr-auto ml-auto min-w-1/2 justify-end'>
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        {list.map((item, index) => <ListItem key={index} value={item} icon={iconList[index]}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderList