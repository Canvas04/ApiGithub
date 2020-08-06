
import {Search} from './module/search.js' ;
import {View} from './module/view.js';
import {Api} from './module/api.js';;

const api = new Api();
const app = new Search(new View(),api);
