// day and night mode 
window.onload = function() {
    const themeImage = document.getElementById('themeToggleImage');
    updateTheme();

    document.getElementById('themeToggle').onclick = function() {
        if (document.body.classList.contains('day-mode')) {
            localStorage.setItem('theme', 'day');
            document.body.classList.add('day-mode');
        } else {
            localStorage.setItem('theme', 'night');
            document.body.classList.remove('day-mode');
        }
        updateTheme();
    };

    function updateTheme() {
        if (document.body.classList.contains('day-mode')) {
            themeImage.src = 'assets/night-icon.png';
            themeImage.alt = 'Switch to Night Mode';
        } else {
            themeImage.src = 'assets/day-icon.png';
            themeImage.alt = 'Switch to Day Mode';
        }
    }
};



// let jobExperiences = [
//     {   title: "UBC Chemistry Department",
//         role: "Teaching Assistant for CHEM 1XX Labs/Resource Center",
//         tag: "Teaching",
//         duration: {
//             start: "May 2022",
//             end: "April 2023"
//         },
//         location: "University of British Columbia",
//         responsibilities: [
//           " Facilitated weekly lab sections for a diverse group of 24 students, ensuring a supportive and engaging learning environment",
//           " Conducted regular office hours to address student questions and clarify misunderstandings related to course content, fostering a deeper understanding and academic success", 
//           " Performed detailed demonstrations to train students on the proper and safe usage of lab equipment, enhancing their technical skills and practical understanding",
//           " Evaluated and graded student assignments with a focus on providing timely, constructive feedback to encourage academic growth and improvement",
//           " Maintained a high level of approachability and responsiveness, receiving consistently positive feedback from both students and faculty"
//         ]        
//     },
//     {     title : "Dr. Roman Krems Group",
//           role: "Teaching Assistant for CHEM 1XX Labs/Resource Center",

//     }

//     { title

//     }
// ];
