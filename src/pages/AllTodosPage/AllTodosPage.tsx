import React, { memo, useEffect } from 'react';
import TabsFilters from '../../components/TabsFilters/TabsFilters';
import SearchInput from '../../components/SearchInput/SearchInput';
import TodoContainer from '../../components/TodoContainer/TodoContainer';

function AllTodosPage() {
  useEffect(() => {}, []);

  return (
    <div style={{display: 'block'}}>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <TabsFilters />
      <SearchInput />
      </div>
      <TodoContainer />
    </div>
  );
}

export default memo(AllTodosPage);
