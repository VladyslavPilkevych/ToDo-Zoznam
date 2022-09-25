import * as React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { IInitialState } from '../../types/types';
import { useActions } from '../../hooks/useActions';
import { theme } from '../../assets/styles/styles';
import styled from 'styled-components';

const CustomBox = styled(Box)`
  padding-left: 10%;
  width: 50%;
  margintop: '10px';
  @media ${(props) => props.theme.media.notLaptop} {
    width: 100%;
  }
`;

export default function TabsFilters() {
  const { filterTodoList, changeFilterCompleteTodos } = useActions();
  const [value, setValue] = React.useState(0);
  const {
    filters: { searchInputFilter },
  } = useSelector((state: IInitialState) => state.todos);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 1:
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: false,
        });
        changeFilterCompleteTodos(false);
        break;
      case 2:
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: true,
        });
        changeFilterCompleteTodos(true);
        break;
      default:
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: null,
        });
        changeFilterCompleteTodos(null);
    }
    setValue(newValue);
  };

  return (
    <CustomBox
    // sx={{
    //   width: '50%',
    //   marginTop: '10px',
    // }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        TabIndicatorProps={{
          style: { backgroundColor: theme.colors.darkBlue },
        }}
        sx={{
          '& button': { fontSize: '14px', fontWeight: '700' },
          '& button.Mui-selected': { color: theme.colors.darkBlue },
          '& button:focus': { color: theme.colors.darkBlue },
          '@media max-width: 425px': {
            paddingLeft: 0,
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
    </CustomBox>
  );
}
