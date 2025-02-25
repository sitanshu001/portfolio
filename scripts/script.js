// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with class 'nonhighlight'
    const nonhighlightedWords = document.querySelectorAll(".nonhighlight");

    // Apply incremental animation delay for each nonhighlighted word
    nonhighlightedWords.forEach((p, i) => {
        p.style.animationDelay = `${i * 0.4}s`; // Apply delay for each span (e.g., 0s, 0.5s, 1s, ...)
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with class 'highlight'
    const highlightedWords = document.querySelectorAll(".highlight");

    // Apply incremental animation delay for each highlighted word
    highlightedWords.forEach((span, j) => {
        span.style.animationDelay = `${j * 0.7}s`; // Apply delay for each span (e.g., 0s, 0.5s, 1s, ...)
    });
});
