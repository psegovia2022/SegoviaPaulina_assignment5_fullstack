
let empForm, employeeId, fullName, extension, email, department, submit;

const $ = (id) => document.getElementById(id);

empForm = $('empForm');
employeeId = $('id');
fullName = $('name');
extension = $('ext');
email = $('email');
department = $('department');
submit = $('submit');

window.addEventListener('load', init, false);

function init() {
    "user strict";
    empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`ID: ${employeeId.value}.\nName: ${fullName.value}.\nExtension: ${extension.value}\nEmail: ${email.value}.\nDepartment: ${department.value}.`)
})
}

