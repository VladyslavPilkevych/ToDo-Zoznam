import * as React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { IInitialState } from '../../types/types';
import { useActions } from '../../hooks/useActions';

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
    <Box sx={{ width: '50%', marginTop: '10px' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        TabIndicatorProps={{ style: { backgroundColor: '#05386B' } }}
        sx={{
          paddingLeft: '40%',
          '& button': { fontSize: '14px', fontWeight: '700' },
          '& button.Mui-selected': { color: '#05386B' },
          '& button:focus': { color: '#05386B' },
        }}
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
    </Box>
  );
}
