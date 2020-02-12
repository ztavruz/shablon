window.onload = function()
{
    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    document.querySelector('.user').innerHTML = user.login;

}