import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IInitialState } from '../../types/types';
import { useActions } from '../../hooks/useActions';

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
  const { filterTodoList, liveSearchInputFilter } = useActions();
  const [inputValue, setInputValue] = useState<string>('');
  const {
    filters: { completedFilter },
  } = useSelector((state: IInitialState) => state.todos);
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    filterTodoList({
      filterSearchInput: e.target.value,
      filterCompleted: completedFilter,
    });
    liveSearchInputFilter(e.target.value);
  };
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
          onChange={changeInputValue}
        />
      </Search>
    </Box>
  );
}
