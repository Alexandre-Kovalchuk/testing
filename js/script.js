import { useQuerySelector } from '../composiable/useQuerySelector.js';
import { useQuerySelectorAll } from '../composiable/useQuerySelectorAll.js'
import { tableData } from './tableData.js'

const burgerIcon = useQuerySelector('.burger__icon')
const aside = useQuerySelector('.aside')
const tbody = useQuerySelector('.table__tbody')
const links = useQuerySelectorAll('.aside__menu-link')

links.forEach(link =>{
  link.addEventListener('click', () =>{
    links.forEach(item => item.classList.remove('aside__menu-link_active'))

    link.classList.add('aside__menu-link_active')
})
})


burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('burger__icon_active')
  aside.classList.toggle('aside_active')
})


tableData.forEach(item => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td data-title="Customer Name" class="table__td">${item.name}</td>
    <td data-title="Company" class="table__td">${item.company}</td>
    <td data-title="Phone Number" class="table__td">${item.phone}</td>
    <td data-title="Email" class="table__td">${item.email}</td>
    <td data-title="Country" class="table__td">${item.country}</td>
    <td data-title="Status" class="table__td ${item.status === 'Inactive' ? 'table__td_inactive' : '' || item.status === 'Active' ? 'table__td_active' : ''}"><span>${item.status}</span></td>
  `;
  tbody.appendChild(tr);

})


