
// js code to make my like buttons work in the website and saves until the user shuts the site.
//Wait for the page to load completely before running the code.
document.addEventListener('DOMContentLoaded', () => {
    //Find all "Like" buttons on the page.
    const likeButtons = document.querySelectorAll('.like-button');
  
    likeButtons.forEach(button => {
      const buttonId = button.id;
      const likedState = sessionStorage.getItem(buttonId);
  
      if (likedState === 'liked') {
        updateButtonState(button);
      }
  
      button.addEventListener('click', (event) => {
        event.preventDefault();
        updateButtonState(button);
        sessionStorage.setItem(buttonId, 'liked');
      });
    });
  });
  //The updateButtonState function updates the button to show that it has been "Liked!" and disables it.
  function updateButtonState(button) {
    button.disabled = true;
    button.textContent = 'Liked!';
  }
  