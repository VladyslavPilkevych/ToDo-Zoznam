import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import {
//   filterTodoList,
//   changeFilterCompleteTodos,
// } from '../../store/actionCreators/todosAC';
import { IInitialState } from '../../types/types';
import { useActions } from '../../hooks/useActions';

export default function TabsFilters() {
  // const dispatch = useDispatch();
  const { filterTodoList, changeFilterCompleteTodos } = useActions();
  const [value, setValue] = React.useState(0);
  const {
    filters: { searchInputFilter },
  } = useSelector((state: IInitialState) => state.todos);
  // dispatch(
  //   filterTodoList({
  //     filterSearchInput: e.target.value,
  //     filterCompleted: completedFilter,
  //   })
  // );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(newValue);
    switch (newValue) {
      case 1:
        // dispatch(
        //   filterTodoList({
        //     filterSearchInput: searchInputFilter,
        //     filterCompleted: false,
        //   })
        // );
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: false,
        });
        // dispatch(changeFilterCompleteTodos(false));
        changeFilterCompleteTodos(false);
        break;
      case 2:
        // dispatch(
        //   filterTodoList({
        //     filterSearchInput: searchInputFilter,
        //     filterCompleted: true,
        //   })
        // );
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: true,
        });
        // dispatch(changeFilterCompleteTodos(true));
        changeFilterCompleteTodos(true);
        break;
      default:
        // dispatch(
        //   filterTodoList({
        //     filterSearchInput: searchInputFilter,
        //     filterCompleted: null,
        //   })
        // );
        filterTodoList({
          filterSearchInput: searchInputFilter,
          filterCompleted: null,
        });
        // dispatch(changeFilterCompleteTodos(null));
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
