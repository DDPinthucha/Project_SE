// Function to handle comment submission
function handleCommentSubmission(event) {
    event.preventDefault();
    
    // Get comment text from input
    var commentText = document.getElementById('comment-input').value;
    
    // Clear input field
    clearCommentInput();
    
    // Add comment to the comments list
    addCommentToDOM(commentText);
    
    // Update comment count
    incrementCommentCount();
}

// Function to clear the comment input field
function clearCommentInput() {
    document.getElementById('comment-input').value = '';
}

// Function to add a comment to the comments list in the DOM
function addCommentToDOM(commentText) {
    var commentsList = document.getElementById('comments-list');
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentText;
    commentsList.appendChild(commentElement);
}

// Function to increment the comment count
function incrementCommentCount() {
    var commentCount = document.getElementById('comment-count');
    commentCount.textContent = parseInt(commentCount.textContent) + 1;
}

// Add event listener to the comment form
document.getElementById('comment-form').addEventListener('submit', handleCommentSubmission);
