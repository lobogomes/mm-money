import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },
 
  seeds(server){
    server.db.loadData({
      transactions: 
      {
        id: 1,
        date: new Date('2022-08-01 12:00:00'),
        initialBalance: 700,
        value: 200,
        type: 'earn',
        description: 'Lucro Bet',
        finalBalance: 900,
      }
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


