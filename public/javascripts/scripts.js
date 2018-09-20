

document.querySelector('#new-pet').addEventListner('submit', (e) => {
  e.preventDefault();
  console.log(this.checkValidity());

})
