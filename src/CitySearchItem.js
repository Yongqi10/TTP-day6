import React from 'react';

function CitySearchItem(props) {
    return(
        <li className='list-group-item'>
            Zip:&nbsp;{props.content}
        </li>
    );
}

export default CitySearchItem;