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
