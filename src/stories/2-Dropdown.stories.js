import React from 'react';
import  Dropdown  from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Text = () => {
  return (<Dropdown label="Abra">
    Conteúdo apenas texto
  </Dropdown>);
}

export const Html = () => {
  return (<Dropdown label="Abra">
    <h2>Exemplo com HTML</h2> 
    <table>
      <thead><th>col1</th><th>col2</th></thead>
      <tbody><tr><td>td1</td><td>td2</td></tr></tbody>
    </table>
  </Dropdown>);
}


