import React, { useState } from 'react';

import { ActionBar, DetailsModal, Header, Table } from './components';
import { Container } from './styles';

export const App = () => {
  const isDetailsModalOpen = false;
  const isAddNewDetailsModalOpen = false;

  function closeDetailPage() {
    setIsDetailsModalOpen(false)
  }

  return (
    <Container id="main-container">
      <Header />
      <ActionBar />
      <Table />
      {isDetailsModalOpen && <DetailsModal  closeDetailPage={closeDetailPage} name='123' id={1} description='lorem ipsum' weight={3} price={5} />}
      {isAddNewDetailsModalOpen && <DetailsModal closeDetailPage={closeDetailPage} name='123' id={1} description='lorem ipsum' weight={3} price={5} />}
      <button onClick={()=>{setIsDetailsModalOpen(true)}}>test</button>
    </Container>
  );
}
