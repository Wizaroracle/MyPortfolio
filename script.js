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

}
// Add more functions or event listeners as needed
