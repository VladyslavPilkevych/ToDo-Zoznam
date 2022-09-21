import React, { memo, useEffect } from 'react';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import SearchInput from '../../components/SearchInput/SearchInput';

function AllTodosPage() {
  useEffect(() => {}, []);

  return (
    <div style={{display: 'block'}}>
      <SearchInput />
      <TodoContainer />
    </div>
  );
}

export default memo(AllTodosPage);
