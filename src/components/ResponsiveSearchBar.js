import React from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ResponsiveSearchBar = ({ onSearch, sx }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'grey.50',
        borderRadius: 1,
        boxShadow: 1,
        p: 1,
        width: '100%',
        ...sx, // Applique les styles supplémentaires passés via props
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey.300',
            },
            '&:hover fieldset': {
              borderColor: 'grey.500',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
        }}
      />
    </Box>
  );
};

export default ResponsiveSearchBar;
