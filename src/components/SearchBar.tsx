import { TextField, InputAdornment } from '@mui/material';
import type { SearchBarProps } from '../types/types';

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange, placeholder }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField 
      placeholder={placeholder} 
      variant="outlined" 
      fullWidth 
      margin="normal" 
      value={searchQuery} 
      onChange={handleSearchChange} 
      InputProps={{
        sx: { 
          height: '44px'
        },
        startAdornment: (
          <InputAdornment position="start">
            <img src="/fi_search.svg" alt="Search icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;