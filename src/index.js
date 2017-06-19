import _ from 'lodash';
import home from './home';

console.log(home)
function component()
{
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', ' webpack'], ' ');
  return element;
}

document.body.appendChild(component());