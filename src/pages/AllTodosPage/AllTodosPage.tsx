import React, { memo, useEffect } from 'react';
import Container from '@mui/material/Container';
import TabsFilters from '../../components/TabsFilters/TabsFilters';
import SearchInput from '../../components/SearchInput/SearchInput';
import TodoContainer from '../../components/TodoContainer/TodoContainer';

function AllTodosPage() {
  useEffect(() => {}, []);

  return (
    <Container sx={{ display: 'block' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <TabsFilters />
        <SearchInput />
      </Container>
      <TodoContainer />
    </Container>
  );
}

export default memo(AllTodosPage);
