import {useState} from 'react'

import './aiSearch.css'
import { SearchIcon } from '../../../assets/images';

export default function SearchBar({setUserQuery}) {
    const [userInput, setUserInput] = useState('');

    const onSearchChange = (e) => {
        //if key is enter, search
        if(e.key === 'Enter'){
            handleSearch();
        }
        setUserInput(e.target.value);
    }

    const handleSearch = () => {
        console.log('searching...')
        setUserQuery(userInput);
        setUserInput('');
    }
  return (
    <div className='aiSearch_SearchBar'>
{/* Tags */}
        <div className='aiSearch_tags'>
            <div className='aiSearch_tag'>All</div>
            <div className='aiSearch_tag'>People</div>
            <div className='aiSearch_tag'>Documents</div>
            <div className='aiSearch_tag'>Images</div>
            <div className='aiSearch_tag'>Videos</div>
        </div>
        {/* Search bar */}
        <div className='aiSearch_searchField'>
            <input type='text' placeholder='Search'
            className='aiSearch_searchField_input'
            onChange={onSearchChange}
            onKeyDown={onSearchChange}
            value={userInput}
            />
            <button onClick={handleSearch} className='btn-hidden-outline'
            disabled={userInput===""} 
            >
                <img src={SearchIcon} alt='white arrow head inside a purple circle' />
            </button>
        </div>
    </div>
  )
}
