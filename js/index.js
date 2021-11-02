//Scroll action
window.addEventListener('scroll', () =>{
    let  scrolled = window.scrollY;
    
    if(scrolled >= 550.25) {
        /*Navbar background colour*/
        document.getElementById('navvy').classList.remove('bg-dark');
        document.getElementById('navvy').classList.add('bg-light');
        /*Brand text*/
        document.getElementById('navvy-brand').classList.remove('text-white');
        /*Icons*/
        document.getElementById('github-icon').style.fill = 'black';
        document.getElementById('twitter-icon').style.fill = 'black';
        document.getElementById('insta-icon').style.fill = 'black';
        /*Dropdowns Text*/
        document.getElementById('welcomeText').classList.remove('text-white');
        document.getElementById('welcomeText').classList.add('text-black');
        document.getElementById('landingsText').classList.remove('text-white');
        document.getElementById('landingsText').classList.add('text-black');
        document.getElementById('pagesText').classList.remove('text-white');
        document.getElementById('pagesText').classList.add('text-black');
        document.getElementById('componentsText').classList.remove('text-white');
        document.getElementById('componentsText').classList.add('text-black');
        /*Dropdown menus*/
        document.getElementById('welcomeDropdown').classList.remove('dropdown-menu-dark');
        document.getElementById('welcomeDropdown').classList.add('dropdown-menu-light');
        document.getElementById('landingsDropdown').classList.remove('dropdown-menu-dark');
        document.getElementById('landingsDropdown').classList.add('dropdown-menu-light');
        document.getElementById('pagesDropdown').classList.remove('dropdown-menu-dark');
        document.getElementById('pagesDropdown').classList.add('dropdown-menu-light');
        document.getElementById('componentsDropdown').classList.remove('dropdown-menu-dark');
        document.getElementById('componentsDropdown').classList.add('dropdown-menu-light');
    }else{
        /*Navbar background colour*/
        document.getElementById('navvy').classList.remove('bg-light');
        document.getElementById('navvy').classList.add('bg-dark');
        /*Brand text*/
        document.getElementById('navvy-brand').classList.add('text-white');
        /*Icons*/
        document.getElementById('github-icon').style.fill = 'white';
        document.getElementById('twitter-icon').style.fill = 'white';
        document.getElementById('insta-icon').style.fill = 'white';
        /*Dropdowns Text*/
        document.getElementById('welcomeText').classList.remove('text-black');
        document.getElementById('welcomeText').classList.add('text-white');
        document.getElementById('landingsText').classList.remove('text-black');
        document.getElementById('landingsText').classList.add('text-white');
        document.getElementById('pagesText').classList.remove('text-black');
        document.getElementById('pagesText').classList.add('text-white');
        document.getElementById('componentsText').classList.remove('text-black');
        document.getElementById('componentsText').classList.add('text-white');
        /*Dropdown menus*/
        document.getElementById('welcomeDropdown').classList.remove('dropdown-menu-light');
        document.getElementById('welcomeDropdown').classList.add('dropdown-menu-dark');
        document.getElementById('landingsDropdown').classList.remove('dropdown-menu-light');
        document.getElementById('landingsDropdown').classList.add('dropdown-menu-dark');
        document.getElementById('pagesDropdown').classList.remove('dropdown-menu-light');
        document.getElementById('pagesDropdown').classList.add('dropdown-menu-dark');
        document.getElementById('componentsDropdown').classList.remove('dropdown-menu-light');
        document.getElementById('componentsDropdown').classList.add('dropdown-menu-dark');
    }
});