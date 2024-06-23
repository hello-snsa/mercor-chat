import {useState} from 'react'

import './aiSearch.css'
import { SearchIcon } from '../../../assets/images';

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');

    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        console.log('searching...')
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
            value={searchText}
            />
            <button onClick={handleSearch} className='btn-hidden-outline'>
                <img src={SearchIcon} alt='white arrow head inside a purple circle' />
            </button>
        </div>
    </div>
  )
}
