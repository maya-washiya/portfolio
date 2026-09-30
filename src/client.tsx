import './base.css';
import Home from './Home';
import Aurelia from './Aurelia';
import {hydrateRoot} from 'react-dom/client';
const Page = document.body.dataset.page === 'aurelia' ? Aurelia : Home;
hydrateRoot(document.getElementById('root')!, <Page/>);
