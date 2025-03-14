document.addEventListener("DOMContentLoaded", function () {
    // Quiz functionality
    document.getElementById('start-quiz').addEventListener('click', function() {
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('quiz-question').innerText = 'Is the email from a legitimate source?';
        document.getElementById('quiz-result').innerText = '';
    });

    const correctAnswer = false; // The correct answer for the mock email question

    document.querySelectorAll('.quiz-option').forEach(button => {
        button.addEventListener('click', function() {
            const userAnswer = this.getAttribute('data-answer') === 'true';
            const resultText = userAnswer === correctAnswer ? 'Correct! This email is a phishing attempt.' : 'Incorrect. This email is not from a legitimate source.';
            document.getElementById('quiz-result').innerText = resultText;
        });
    });
});