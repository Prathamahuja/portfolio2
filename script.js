// // Sample data to simulate the experiences
// const experiences = [
//     {
//         duration: "July 2022 - Septemper 2022",
        // role: "Full Stack Developer",
//         company: "Company A",
//         url: "https://www.companya.com",
//         points: [
//             "Developed user interfaces using React.",
//             "Collaborated with backend teams to integrate APIs.",
//             "Optimized the application for performance and scalability."
//         ]
//     },
//     {
//         duration: "Mar 2021 - Dec 2021",
//         role: "Web Developer Intern",
//         company: "Company B",
//         url: "https://www.companyb.com",
//         points: [
//             "Assisted in developing responsive websites.",
//             "Participated in code reviews and team meetings.",
//             "Learned about industry-standard tools and practices."
//         ]
//     }
// ];

// const timeline = document.getElementById('timeline');

// experiences.forEach((experience) => {
//     const timelineElement = document.createElement('div');
//     timelineElement.className = 'timeline-element';

//     timelineElement.innerHTML = `
//         <h3>${experience.role}</h3>
//         <p>${experience.company}</p>
//         <ul>
//             ${experience.points.map(point => `<li>${point}</li>`).join('')}
//         </ul>
//     `;

//     timeline.appendChild(timelineElement);
// });
// Sample data to simulate the experiences
const experiences = [
    {
        duration: "July 2022 - August 2022",
        role: "Frontend Developer",
        company: "TCIL/IT",
        url: "https://www.companya.com",
        points: [
            "Developed user interfaces using React.",
            "Collaborated with backend teams to integrate APIs.",
            "Optimized the application for performance and scalability."
        ]
    },
    // {
    //     duration: "Mar 2021 - Dec 2021",
    //     role: "Web Developer Intern",
    //     company: "Company B",
    //     url: "https://www.companyb.com",
    //     points: [
    //         "Assisted in developing responsive websites.",
    //         "Participated in code reviews and team meetings.",
    //         "Learned about industry-standard tools and practices."
    //     ]
    // }
];

const timeline = document.getElementById('timeline');

experiences.forEach((experience) => {
    const timelineElement = document.createElement('div');
    timelineElement.className = 'timeline-element';

    timelineElement.innerHTML = `
        <h3>${experience.role}</h3>
        <p>${experience.company}</p>
        <p class="duration">${experience.duration}</p>
        <ul>
            ${experience.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
    `;

    timeline.appendChild(timelineElement);
});
