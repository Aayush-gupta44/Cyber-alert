document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
});

const quizButtons = document.querySelectorAll('.quiz-btn');
let currentQuiz = 0;
let score = 0;
const totalQuestions = document.querySelectorAll('.quiz-question').length;

// Function to display the next question
function showNextQuestion() {
    const allQuestions = document.querySelectorAll('.quiz-question');

    // Hide current question
    if (currentQuiz > 0) {
        allQuestions[currentQuiz - 1].style.display = 'none';
    }

    // Show next question
    if (currentQuiz < allQuestions.length) {
        allQuestions[currentQuiz].style.display = 'block';
    }

    // If it's the last question, show the result
    if (currentQuiz === allQuestions.length - 1) {
        document.getElementById('nextQuizBtn').style.display = 'none';
        document.getElementById('quizResult').innerText = `You scored ${score} out of ${totalQuestions}`;
        document.getElementById('resources').style.display = 'block';
    } else {
        document.getElementById('nextQuizBtn').style.display = 'block';
    }
}

// Quiz button handling
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer');
        const resultText = answer === 'true' ? "Correct! This is a phishing attempt." : "Incorrect! This is a phishing attempt.";
        document.getElementById('quizResult').innerText = resultText;

        // Increase score if correct
        if (answer === 'true') {
            score++;
        }

        // Proceed to the next question
        currentQuiz++;
        showNextQuestion();
    });
});

// Next question button handling
document.getElementById('nextQuizBtn').addEventListener('click', function() {
    showNextQuestion();
});
