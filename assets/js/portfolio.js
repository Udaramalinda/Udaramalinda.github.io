document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectID = urlParams.get('id');
    
    const ProjectData = {

      1: 
        { 
        name: 'ARUCI Bank Management System', 
        year: 2023, 
        url: 'https://github.com/Udaramalinda/BankProject-DBMS',
        stack: 'React, NodeJS, Express, MySQL',
        contribution: 'Frontend and Backend',
        description: "This project was to build a bank management system that supported branch\
        management, account management, employee management, etc. We were to use\
        various database management principles to build a robust system that could handle\
        errors, concurrency, etc.",
        image1: 'assets/img/portfolio/bank-management-system/home.png',
        image2: 'assets/img/portfolio/bank-management-system/manager.png',
        image3: 'assets/img/portfolio/bank-management-system/customer.png',
        },

      2: 
        { name: 'Alice', age: 25 }
    };
    
    // Display person data on the page
    if (projectID && ProjectData[projectID]) {
      const project = ProjectData[projectID];
      document.getElementById('projectName').innerText = project.name;
      document.getElementById('projectYear').innerText = project.year;
      document.getElementById('projectURL').href = project.url;
      document.getElementById('projectStack').innerText = project.stack;
      document.getElementById('projectContribution').innerText = project.contribution;
      document.getElementById('projectDescription').innerText = project.description;
      document.getElementById('projectImage1').src = project.image1;
      document.getElementById('projectImage2').src = project.image2;
      document.getElementById('projectImage3').src = project.image3;
    } else {
      document.getElementById('personData').innerText = 'Person not found';
    }
  });
  