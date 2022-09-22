import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
  filterTodoList,
  liveSearchInputFilter,
} from '../../store/actionCreators/todosAC';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  float: 'right',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color: '#EDF5E1',
  zIndex: 2,
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#EDF5E1',
  borderRadius: '50px',
  backgroundColor: '#379683',
  '&:hover': {
    backgroundColor: '#287a69',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}));

export default function SearchInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <Box sx={{ margin: '20px auto' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search by ToDo title:"
          inputProps={{ 'aria-label': 'search' }}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // console.log(e.target.value);
            setInputValue(e.target.value);
            console.log(e.target.value);
            dispatch(
              filterTodoList({ value: e.target.value, action: 'search' })
            );
            dispatch(liveSearchInputFilter(e.target.value));
          }}
        />
      </Search>
    </Box>
  );
}
