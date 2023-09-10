import React, { Component } from 'react';
import jsonData from '../db.json'; // Замените путь на путь к вашему файлу data.json

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>{jsonData.name}</h1>
        <p>{jsonData.info}</p>
        <p>Дедлайн: {jsonData.deadline}</p>
        <a href={jsonData.url}>Ссылка</a>
        {/* Другие свойства */}
      </div>
    );
  }
}

export default MyComponent;