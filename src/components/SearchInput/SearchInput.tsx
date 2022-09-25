import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled as muiStyled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IInitialState } from '../../types/types';
import { useActions } from '../../hooks/useActions';
import styled from 'styled-components';
import { theme as globalColorsTheme } from '../../assets/styles/styles';

const Search = styled.div`
  position: relative,
  backgroundColor: ${(props) => props.theme.colors.light};
  float: right;
  :hover {
    backgroundColor: ${(props) => props.theme.colors.pinkLight};
  }
`;

const SearchIconWrapper = styled.div`
  padding: 8px 13px;
  color: ${(props) => props.theme.colors.creamWhite};
  z-index: 2;
  position: absolute;
  pointerevents: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: globalColorsTheme.colors.creamWhite,
  borderRadius: '50px',
  backgroundColor: globalColorsTheme.colors.swampGreen,
  '&:hover': {
    backgroundColor: globalColorsTheme.colors.swampGreen2,
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
