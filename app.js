function showSlideBar(){
    const sidebar=document.querySelector('.nav-wrapper')
    sidebar.style.visibility="visible"
    sidebar.style.display="flex"
 }
 function hideSidebar(){
     const sidebar=document.querySelector('.nav-wrapper')
    sidebar.style.visibility="invisible"
    sidebar.style.display="none"
 }
 function mode() {
    const darkmodeButton = document.getElementById('toggleMode'); // Correct selector
    const body = document.body;

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkmodeButton.style.backgroundColor = 'chartreuse';
        darkmodeButton.style.color = 'white';
        darkmodeButton.textContent = 'Light Mode';
    } else {
        darkmodeButton.style.backgroundColor = 'chartreuse';
        darkmodeButton.style.color = 'black';
        darkmodeButton.textContent = 'Dark Mode';
    }
}

document.getElementById('toggleMode').addEventListener('click', mode);

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}