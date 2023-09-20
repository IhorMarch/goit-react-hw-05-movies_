import React from 'react';
import { useState } from 'react';
import { Search,SearchForm,SearchBtn,SearchInput } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';


export const SearchBar = ({ onSubmit }) => {
    
    const [query, setQuery] = useState('');
  

    const handleChange = event => {
     setQuery(event.target.value );
    };


    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(query);
        setQuery('');
    }

     
        return (
            <Search>
            <SearchForm onSubmit={handleSubmit}>
               
                <SearchInput
                    type="text"
                    name="searchName"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search the film"
                    title="query"
                    required
              />
            
            
                <SearchBtn type="submit"><BsSearch /></SearchBtn>
                </SearchForm>
            </Search>
        );
    
  
};