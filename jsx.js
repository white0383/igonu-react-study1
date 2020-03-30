function formatName(u) {
  return u.firstName + ' ' + u.lastName;
}

const user = {
  firstName: 'Kim',
  lastName: 'Theo'
};

const element = <h1>Hello, {formatName(user)}</h1>;

const domContainer = document.querySelector('#react1');
ReactDOM.render(element, domContainer);
// ReactDOM.render(
//   element, 
//   document.getElementById('react1')
// );