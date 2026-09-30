import {renderToString} from 'react-dom/server';
import Home from './Home';
import Aurelia from './Aurelia';
export function render(page: string) {
 const Page = page === 'aurelia' ? Aurelia : Home;
 return renderToString(<Page/>);
}
