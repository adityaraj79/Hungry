function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  let currentFeedbackIndex = 0;
  
  function showFeedback(direction) {
      const feedbackElements = document.querySelectorAll('.feedback-item-list');
  
      
      feedbackElements[currentFeedbackIndex].style.display = 'none';
  
      if (direction === 'next') {
          currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackElements.length;
      } else if (direction === 'back') {
          currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbackElements.length) % feedbackElements.length;
      }
  
      feedbackElements[currentFeedbackIndex].style.display = 'block';
  }
  