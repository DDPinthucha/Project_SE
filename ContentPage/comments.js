document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get comment text from input
    var commentText = document.getElementById('comment-input').value;
    
    // Clear input field
    document.getElementById('comment-input').value = '';
    
    // Add comment to the comments list
    var commentsList = document.getElementById('comments-list');
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentText;
    commentsList.appendChild(commentElement);
    
    // Update comment count
    var commentCount = document.getElementById('comment-count');
    commentCount.textContent = parseInt(commentCount.textContent) + 1;
  });