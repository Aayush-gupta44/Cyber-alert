document.getElementById('learnMoreBtn').addEventListener('click', function () {
    document.getElementById('info').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion(0); // Start the quiz by showing the first question
});

let currentQuestionIndex = 0;
let score = 0; // Initialize the score
const totalQuestions = 15; // Total number of questions
const questions = document.querySelectorAll('.quiz-question');
const resultDisplay = document.getElementById('quizResult');

function showQuestion(index) {
    // Hide all questions
    questions.forEach(question => question.style.display = 'none');

    // Show the current question
    questions[index].style.display = 'block';
}

document.querySelectorAll('.quiz-btn').forEach(button => {
    button.addEventListener('click', function () {
        const correctAnswer = this.dataset.answer === 'true';
        
        // Change the background color based on the correctness of the answer
        if (correctAnswer) {
            this.style.backgroundColor = 'green';
            score++; // Increment score if the answer is correct
        } else {
            this.style.backgroundColor = 'red';
        }

        // Disable all buttons in the current question after selection
        this.parentElement.querySelectorAll('button').forEach(btn => btn.disabled = true);

        // Move to the next question after a short delay
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                // Display score and remarks
                displayResults();
            }
        }, 1000); // Delay before showing the next question
    });
});

function displayResults() {
    // Calculate the final score and display it
    resultDisplay.textContent = `Your Score: ${score} / ${totalQuestions}`;

    // Display remarks based on the score
    let remark = '';
    if (score < totalQuestions / 2) {
        remark = 'Unsatisfactory';
    } else if (score === totalQuestions) {
        remark = 'Excellent';
    } else {
        remark = 'Satisfactory';
    }

    const remarkElement = document.createElement('p');
    remarkElement.textContent = `Remark: ${remark}`;
    resultDisplay.appendChild(remarkElement);
}
