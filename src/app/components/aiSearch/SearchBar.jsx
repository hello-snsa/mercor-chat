import {useState} from 'react'

import './aiSearch.css'
import { SearchIcon } from '../../../assets/images';

export default function SearchBar({setUserQuery}) {
    const [userInput, setUserInput] = useState('');

    const onSearchChange = (e) => {
        //if key is enter, search
        setUserInput(e.target.value);
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    const handleSearch = () => {
        console.log('searching...')
        setUserQuery(userInput);
        setUserInput('');
    }

    const handleTagClick = (tag) => {
        setUserQuery(tag);
        // TODO: Add tag to search query
    }
  return (
    <div className='aiSearch_SearchBar'>
{/* Tags */}
        <div className='aiSearch_tags'>
            <div className='aiSearch_tag'><button className='btn-hidden-outline' onClick={()=>handleTagClick("3 years Experience")}> 3 years Experience</button></div>
            <div className='aiSearch_tag'><button className='btn-hidden-outline' onClick={()=>handleTagClick("Full time only")}> Full time only</button></div>
            <div className='aiSearch_tag'><button className='btn-hidden-outline' onClick={()=>handleTagClick("Part time only")}> Part time only</button></div>
            <div className='aiSearch_tag'><button className='btn-hidden-outline' onClick={()=>handleTagClick("Budget is 5000")}> Budget is 5000 </button></div>
            <div className='aiSearch_tag'><button className='btn-hidden-outline' onClick={()=>handleTagClick("Education : B.tech")}> Education : B.tech</button></div>
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
