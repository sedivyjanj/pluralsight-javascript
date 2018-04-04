import {getUsers} from './api/userApi';
import './index.css';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+= '<tr>';
        usersBody+= '<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>';
        usersBody+= '<td>${user.id}</td>';
        usersBody+= '<td>${user.firstName}</td>';
        usersBody+= '<td>${user.lastName}</td>';
        usersBody+= '<td>${user.email}</td>';
        usersBody+= '</tr>';
    });

    global.document.getElementById('users').innerHTML = usersBody;
});
