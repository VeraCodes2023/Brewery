import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchInputProps{
  searchValue:string,
  setSearchValue:(value:string)=>void
}

const SearchInput:React.FC<SearchInputProps> = (props) => {
    const {searchValue,setSearchValue}=props
  return (
    <TextField
          sx={{width:'30%', marginBottom:3}}
        label="Search" value={searchValue} onChange={e=>setSearchValue(e.target.value)}
    />
  )
}

export default SearchInput