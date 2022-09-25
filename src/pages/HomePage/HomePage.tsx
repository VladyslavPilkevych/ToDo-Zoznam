import React, { FC, memo, useEffect } from 'react';
import Container from '@mui/material/Container';
import CreateNewTaskField from '../../components/CreateNewTaskField/CreateNewTaskField';

const HomePage: FC = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <CreateNewTaskField />
    </Container>
  );
};

export default memo(HomePage);
