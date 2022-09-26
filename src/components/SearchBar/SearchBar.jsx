import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ErrorNotify } from '../../utils/Toastify'
import { ToastContainer } from 'react-toastify'

function SearchBar(props) {
    const { onSearch } = props;
    const [searchText, setSearchText] = useState('')

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key === 'Enter') {
            if(searchText == '') {
                ErrorNotify("No User given")
            } else {
                onSearch(searchText.replace(" ", ""))
            }
        }
    }

  return (
    <div>
        <ToastContainer />
        <div className={styles.control}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <input type="text" className={styles.input} placeholder='Search for a user' onChange={handleInput} onKeyPress={handleEnterKeyPressed} value={searchText}/>
        </div>
    </div>
  )
}

export default SearchBar