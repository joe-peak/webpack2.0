import _ from 'lodash';
import home from './home';

/*let {...arr}={name:'Joe','Age':'24'};
console.log(arr);*/
 let arr={name:'Joe','Age':'24'};
    console.log({arr});
class Point{
  constructor()
  {
    let arr={name:'Joe','Age':'24'};
    Object.assign(this,...arr);
    console.log(new Map(...arr))
  }

  //static sex;
}

console.log(home);
let component=()=>{
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', ' webpack'], ' ');
  return element;
};

document.body.appendChild(component());

