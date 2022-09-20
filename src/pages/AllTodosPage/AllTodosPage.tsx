import React, { memo, useEffect } from 'react';
import TodoContainer from '../../components/TodoContainer/TodoContainer';

function AllTodosPage() {
  useEffect(() => {}, []);

  return (
    <div>
      <TodoContainer />
    </div>
  );
}

export default memo(AllTodosPage);
