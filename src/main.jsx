import React from 'react';
import reactDOM from 'react-dom/client';
import { Counter } from './Counter';
import "./index.css"
reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Counter value={10}/>
    </React.StrictMode>
)

