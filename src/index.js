import './sass/styles.scss';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './js/gallery-food';
// import './js/theme-toggle';
import './js/local-storage';

const Handlebars = require('handlebars');
const template = Handlebars.compile('Name: {{name}}');
// console.log(template({ name: 'Nils' }));
