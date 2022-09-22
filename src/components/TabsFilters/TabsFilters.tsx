import * as React from 'react';
import { useDispatch } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { filterTodoList, changeFilterCompleteTodos } from '../../store/actionCreators/todosAC';

export default function TabsFilters() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    switch (newValue) {
      case 0:
        dispatch(filterTodoList({ value: 'all', action: 'complete' }));
        break;
      case 1:
        dispatch(filterTodoList({ value: false, action: 'complete' }));
        break;
      case 2:
        dispatch(filterTodoList({ value: true, action: 'complete' }));
        break;

      default:
        dispatch(filterTodoList({ value: 'all', action: 'complete' }));
    }
    dispatch(changeFilterCompleteTodos(newValue));
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
