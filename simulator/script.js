document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
});

const quizButtons = document.querySelectorAll('.quiz-btn');
let currentQuiz = 0;
let score = 0;

// First quiz question
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer');
        const resultText = answer === 'true' ? "Correct! This is a phishing attempt." : "Incorrect! This is a phishing attempt.";
        document.getElementById('quizResult').innerText = resultText;
        if (answer === 'true') {
            score++;
        }
        document.getElementById('nextQuizBtn').style.display = 'block';
    });
});

// Next question button
document.getElementById('nextQuizBtn').addEventListener('click', function() {
    currentQuiz++;
    if (currentQuiz === 1) {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('moreQuizzes').style.display = 'block';
    } else if (currentQuiz < 15) {
        // Continue with more questions here
    } else {
        document.getElementById('moreQuizzes').style.display = 'none';
        document.getElementById('resources').style.display = 'block';
        alert("You scored " + score + " out of 15!");
    }
});

// Link quiz
const linkQuizButtons = document.querySelectorAll('#moreQuizzes .quiz-btn');
linkQuizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer');
        const resultText = answer === 'true' ? "Correct! This link is unsafe." : "Incorrect! This link is unsafe.";
        document.getElementById('linkQuizResult').innerText = resultText;
        if (answer === 'true') {
            score++;
        }
    });
});
