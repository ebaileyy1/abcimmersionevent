function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const currentDisplay = answers[index].style.display;

    if (currentDisplay === 'block') {
        answers[index].style.display = 'none';
    } else {
        answers.forEach(answer => answer.style.display = 'none'); // Close all answers
        answers[index].style.display = 'block'; // Open the clicked one
    }
}
