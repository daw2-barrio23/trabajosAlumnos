// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { home } from "./vistas/home";
import {header} from "./componentes/header"
import {footer} from "./componentes/footer"

document.querySelector('main').innerHTML = home.templeate;
document.querySelector('header').innerHTML = header.templeate;
document.querySelector('footer').innerHTML = footer.templeate;

