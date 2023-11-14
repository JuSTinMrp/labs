// document.addEventListener('DOMContentLoaded', function () {
//     const deployBtn = document.getElementById('deployBtn');
//     const stopBtn = document.getElementById('stopBtn');
//     const timerDisplay = document.getElementById('timer');
//     let deploymentTime = 0;
//     let timerInterval;

//     deployBtn.addEventListener('click', function () {
//         // Call a backend endpoint to deploy the instance
//         // Start a timer
//         deploymentTime = 0;
//         timerInterval = setInterval(function () {
//             deploymentTime++;
//             timerDisplay.textContent = `Deployment Time: ${deploymentTime} minutes`;
//         }, 60000);
//     });

//     stopBtn.addEventListener('click', function () {
//         // Call a backend endpoint to stop the instance
//         // Stop the timer
//         clearInterval(timerInterval);
//         timerDisplay.textContent = `Deployment Time: ${deploymentTime} minutes`;
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const backgroundImage = document.querySelector('.background-image');

    document.addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        backgroundImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
});
