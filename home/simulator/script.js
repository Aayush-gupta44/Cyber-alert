document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('info').style.display = 'none'; // Hide info section
    document.getElementById('quiz').style.display = 'block'; // Show quiz section
    showNextQuestion(); // Display the first question
});

let currentQuiz = 0;
let score = 0;
const totalQuestions = 14; // Total number of questions (update this if more questions are added)
let userAnswers = []; // To track user answers

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
        document.getElementById('nextQuizBtn').style.display = 'block';
    }
}

// Quiz button handling
const quizButtons = document.querySelectorAll('.quiz-btn');
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer') === 'true';
        const questionId = this.getAttribute('data-question');

        // Store the user's answer
        userAnswers[questionId - 1] = answer;

        // Increase score if correct
        if (answer) {
            score++;
        }

        // Proceed to the next question
        currentQuiz++;
        showNextQuestion();
    });
});

// Finish the quiz and show results
function finishQuiz() {
    let resultText = `You scored ${score} out of ${totalQuestions}.`;

    // Determine feedback based on score
    if (score < totalQuestions / 2) {
        resultText += " Unsatisfactory.";
    } else if (score >= totalQuestions - 2) {
        resultText += " Excellent!";
    } else {
        resultText += " Satisfactory.";
    }

    document.getElementById('quizResult').innerText = resultText;

    // Hide the 'Next' button
    document.getElementById('nextQuizBtn').style.display = 'none';

    // Display correct answers
    displayCorrectAnswers();
}

// Function to display the correct answers after the quiz
function displayCorrectAnswers() {
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach((question, index) => {
        const buttons = question.querySelectorAll('.quiz-btn');
        buttons.forEach(button => {
            if (button.getAttribute('data-answer') === 'true') {
                button.style.backgroundColor = '#4CAF50'; // Green for correct answers
            } else {
                button.style.backgroundColor = '#f44336'; // Red for incorrect answers
            }
        });

        // Show the correct answer
        const correctAnswer = question.querySelector(`[data-answer="true"]`);
        question.innerHTML += `<p><strong>Correct Answer: ${correctAnswer.innerText}</strong></p>`;
    });
}
