import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {nav, data} from './data/data.js'

createRoot(document.getElementById('root')).render(
    <App nav={nav} data={data}/>
)
