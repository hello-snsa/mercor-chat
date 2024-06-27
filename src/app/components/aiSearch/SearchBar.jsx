import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import './aiSearch.css';
import { SearchIcon } from '../../../assets/images';

export default function SearchBar({ userQuery, setUserQuery, setMessages,isLoading }) {

    const tempTags = ["react developer", "3 years Experience", "Full time only", "Part time only", "Budget is 5000", "Education : B.tech"];// TODO: Remove this and generate tags logically.

    const [userInput, setUserInput] = useState('');
    const [availableTags, setAvailableTags] = useState([]);

    const onSearchChange = (e) => {
        setUserInput(e.target.value);
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        setUserQuery(userInput);
        setMessages(prev => ([...prev, {
            "senderText": userInput || ""
        }]))
        setUserInput('');
    }

    const handleTagClick = (tag) => {
        if(isLoading) return;
        setUserQuery(tag);
        setMessages(prev => ([...prev, {
            "senderText": tag || ""
        }]))
        setUserInput('');
    }
    
    useEffect(() => {
        // TODO: handle Available tags.
        setAvailableTags(tempTags)
    }, []);

    return (
        <div className='aiSearch_searchbar'>
            <div className='aiSearch_tags'>
                {
                    availableTags.map((tag, index) => (
                        <div key={index} className='aiSearch_tag'>
                            <button className='btn-hidden-outline' onClick={() => handleTagClick(tag)}> {tag}</button>
                        </div>
                    ))
                }
            </div>
            <div className='aiSearch_searchField'>
                <input type='text' placeholder={t('searchPlaceholder')}
                    className='aiSearch_searchField_input'
                    onChange={onSearchChange}
                    onKeyDown={onSearchChange}
                    value={userInput}
                />
                <button onClick={handleSearch} className='btn-hidden-outline'
                    disabled={!userInput || isLoading}
                >
                    <img src={SearchIcon} alt={t('searchIconAlt')} />
                </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    setUserQuery: PropTypes.func,
    setMessages: PropTypes.func,
    userQuery: PropTypes.string,

}
