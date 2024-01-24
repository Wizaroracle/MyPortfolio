function showProjectDetails(title, githubLink) {
    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = "Detailed description of " + title + ".";
    document.getElementById('project-github').href = githubLink;
    
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';
}

function toggleDashboard() {
   
        var dashboardNav = document.querySelector('.dashboard');
        dashboardNav.classList.toggle('show');

        var contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.classList.toggle('blur');

        var burgerMenu = document.querySelector('.burger-menu');
        var isDashboardVisible = dashboardNav.classList.contains('show');

        // Update burger menu text based on the dashboard visibility
        burgerMenu.innerText = isDashboardVisible ? '☰' : '✕';
}


// Add more functions or event listeners as needed
