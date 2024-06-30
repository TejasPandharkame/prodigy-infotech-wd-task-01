var navlinks = document.getElementById("nav-link");

function showMenu() {
  navlinks.style.right = "0";
}
function hideMenu() {
  navlinks.style.right = "-200px";
}

//for navbar
window.addEventListener('scroll', function()
{
    const navbar=document.querySelector('.nav');
      if(window.scrollY>150)
      {
          navbar.classList.add('scrolled');         
      }
      else
   {
      navbar.classList.remove('scrolled');
  }
 });
// for login form//


document.getElementById('loginbutton').onclick=function(){
    document.getElementById('loginform').style.display='block';
}
window.onclick = function(event) {
  if (event.target == document.getElementById('loginform')) {
      document.getElementById('loginform').style.display = 'none';      
  }
}