import React, { FC, memo, useEffect } from 'react';
import CreateNewTaskField from '../../components/CreateNewTaskField/CreateNewTaskField';

const HomePage: FC = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <CreateNewTaskField />
    </div>
  );
};

export default memo(HomePage);
