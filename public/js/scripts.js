// use to toggle the sidebar
const menu = document.querySelector('.nav-menu span a[data-view="hamburger"]')
const alertChild = document.querySelector('#alert div.alert');
menu.addEventListener('click', () => {
    const aside = document.querySelector('aside');
    aside.classList.toggle('hidden');
})
// use to open popup alert notification after success submit form
const formSubmit = document.getElementById('contactUs');
formSubmit.addEventListener('submit', (e) => {
    alertChild.classList.add('show-alert');
    e.preventDefault();
})
// close popup alert notification
const buttonClose = document.getElementById('closeBtn');
buttonClose.addEventListener('click', () => {
    alertChild.classList.remove('show-alert');
})