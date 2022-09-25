import React, { memo, useEffect } from 'react';
import Container from '@mui/material/Container';
import TabsFilters from '../../components/TabsFilters/TabsFilters';
import SearchInput from '../../components/SearchInput/SearchInput';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import styled from 'styled-components';

const CustomFilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.media.notLaptop} {
    display: block;
  }
`;

function AllTodosPage() {
  useEffect(() => {}, []);

  return (
    <Container sx={{ display: 'block' }}>
      <CustomFilterContainer>
        <TabsFilters />
        <SearchInput />
      </CustomFilterContainer>
      <TodoContainer />
    </Container>
  );
}

export default memo(AllTodosPage);
