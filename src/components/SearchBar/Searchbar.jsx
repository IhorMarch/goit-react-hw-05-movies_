import React from 'react';

import { Search,SearchForm,SearchBtn,SearchInput } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';


export const SearchBar = ({ value, onChange }) => {
    
   


    const handleSubmit = event => {
        event.preventDefault();
    }

       

     
        return (
            <Search>
            <SearchForm onSubmit={handleSubmit}>
               
                <SearchInput
                    type="text"
                    name="searchName"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder="Search the film"
                    title="query"
                    required
              />
            
            
                <SearchBtn type="submit"><BsSearch /></SearchBtn>
                </SearchForm>
            </Search>
        );
    
  
};