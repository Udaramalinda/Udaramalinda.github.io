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
          image2: 'assets/img/portfolio/bank-management-system/customer.png',
          image3: 'assets/img/portfolio/bank-management-system/manager.png'
        },

      2: 
        { 
          name: 'MIS Child Management System', 
          year: 2023, 
          url: 'https://github.com/Udaramalinda/MIS-Project',
          stack: 'React, NodeJS, Express, PostgreSQL',
          contribution: 'Frontend and Backend',
          description: "This is a project to build a Child Orphan Management System to manage orphanage\
          management, child profiles, case management, children placement and adoption,\
          Document management, etc. We create a web frontend and mobile frontend for this\
          system.",
          image1: 'assets/img/portfolio/child-management-system/home.png',
          image2: 'assets/img/portfolio/child-management-system/register.png',
          image3: 'assets/img/portfolio/child-management-system/login.png', 
        },

      3: 
        { 
          name: 'Sun Travels Hotel Management System', 
          year: 2024, 
          url: '',
          stack: 'Angular, SpringBoot, PostgreSQL',
          contribution: 'Complete Project',
          description: "This project was to build a hotel management system that supported room\
          management, booking management, employee management, etc. We were to use\
          various database management principles to build a robust system that could handle\
          errors, concurrency, etc. We create a web frontend and springboot backend for this\
          system.",
          image1: 'assets/img/portfolio/hotel-management-system/admin.png',
          image2: 'assets/img/portfolio/hotel-management-system/agent.png',
          image3: 'assets/img/portfolio/hotel-management-system/table.png',  
        },
      4: 
        { 
          name: 'Nano Processor VHDL', 
          year: 2022, 
          url: 'https://github.com/Udaramalinda/Nano-Processor-Design-Project',
          stack: 'VHDL',
          contribution: 'Group Project',
          description: "Engineered a 4-bit nano-processor with capabilities encompassing addition, negation,\
          movement, conditional jumps, and non-zero checks, subsequently enhancing it to an 8-\
          bit architecture, incorporating additional functionalities such as increment, decrement,\
          left shift, and right shift operations.",
          image1: 'assets/img/portfolio/nano-processor/LUT_comparison.png',  
        },
      5: 
        { 
          name: 'PintOS Operating System', 
          year: 2023, 
          url: 'https://github.com/Udaramalinda/Pintos',
          stack: 'C Language',
          contribution: 'Group Project',
          description: "The project's objective was to create and incorporate essential functionalities within an\
          operating system. These functionalities included implement system calls, managing\
          timers, ensuring synchronization among processes, implementing job scheduling, and\
          facilitating the execution of user programs.",
          image1: 'assets/img/portfolio/pintos/SS1.png',
          image2: 'assets/img/portfolio/pintos/SS2.png',
          image3: 'assets/img/portfolio/pintos/SS3.png',  
        },
      5: 
        { 
          name: 'PintOS Operating System', 
          year: 2023, 
          url: 'https://github.com/Udaramalinda/Pintos',
          stack: 'C Language',
          contribution: 'Group Project',
          description: "The project's objective was to create and incorporate essential functionalities within an\
          operating system. These functionalities included implement system calls, managing\
          timers, ensuring synchronization among processes, implementing job scheduling, and\
          facilitating the execution of user programs.",
          image1: 'assets/img/portfolio/pintos/SS1.png',
          image2: 'assets/img/portfolio/pintos/SS2.png',
          image3: 'assets/img/portfolio/pintos/SS3.png',  
        },
      6: 
        { 
          name: 'Command Line Email Client', 
          year: 2022, 
          url: 'https://github.com/Udaramalinda/Email-Client',
          stack: 'Java',
          contribution: 'Complete Project',
          description: "Designed and developed a terminal-based email client featuring send and receive\
          emails, automated birthday greetings for close contacts, and customizable signatures,\
          demonstrating proficiency in Design Patterns and Object-Oriented Programming\
          principles.",
          image1: 'assets/img/portfolio/pintos/SS1.png',
          image2: 'assets/img/portfolio/pintos/SS2.png',
          image3: 'assets/img/portfolio/pintos/SS3.png',  
        }
    };
    
    // Display project data on the page
    if (projectID && ProjectData[projectID]) {
      const project = ProjectData[projectID];
      document.getElementById('projectName').innerText = project.name;
      document.getElementById('projectBreadScrum').innerText = project.name;
      document.getElementById('projectYear').innerText = project.year;
      document.getElementById('projectURL').href = project.url;
      document.getElementById('projectStack').innerText = project.stack;
      document.getElementById('projectContribution').innerText = project.contribution;
      document.getElementById('projectDescription').innerText = project.description;
      document.getElementById('projectImageOne').src = project.image1;
      document.getElementById('projectImageTwo').src = project.image2;
      document.getElementById('projectImageThree').src = project.image3;
    } else {
      document.getElementById('projectData').innerText = 'Project not Found';
    }
  });
  