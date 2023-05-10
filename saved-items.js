// Function to save an item
function saveItem(item, url) {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push({ content: item, url: url });
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    alert(`You have saved ${savedItems.length} item(s) for later.`);
}

// Function to delete a saved item
function deleteSavedItem(index) {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.splice(index, 1);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    displaySavedItems();
    alert('Saved item deleted.');
}

// Function to display saved items on saved-items.html
function displaySavedItems() {
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    let container = document.getElementById('saved-items-container');
    container.innerHTML = '';

    savedItems.forEach((item, index) => {
        // Create a container for the item and the delete button
        let itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';

        let itemDiv = document.createElement('div');
        itemDiv.innerHTML = item.content;

        // Make the item clickable and navigate to its URL
        itemDiv.style.cursor = 'pointer';
        itemDiv.onclick = function() {
            window.location.href = item.url;
        };

        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-button'; // Add class name here
        deleteButton.onclick = function(event) {
            event.stopPropagation(); // Prevent navigation when clicking the delete button
            deleteSavedItem(index);
        };

        // Append the item and delete button to the item container
        itemContainer.appendChild(itemDiv);
        itemContainer.appendChild(deleteButton);

        // Append the item container to the main container
        container.appendChild(itemContainer);
    });
}


// Call the display function if on the saved-items.html page
if (document.getElementById('saved-items-container')) {
    displaySavedItems();
}


$(document).ready(function() {
    // Dropdown menu
    $("#dropdown-btn").click(function() {
      $("#dropdown-menu").slideToggle();
    });
  
    // Hide and show element
    $("#toggle-btn").click(function() {
      $("#hidden-element").toggle();
    });
  
    // Animation effect
    $("#animate-btn").click(function() {
      $("#animated-element").animate({width: 'toggle'});
    });
});
// Chain animation effect
$(document).ready(function() {
    $("#chained-element").mouseenter(function() {
      $(this).slideUp(500)
             .slideDown(500)
             .fadeOut(500)
             .fadeIn(500);
    });
  
    $("#chained-element").click(function() {
      $(this).finish();
    });
  });
  
  
  
//  set the animation speed
(function ($) {
  $.fn.textAnimation = function (animation_speed, text_speed, animation) {
    var text;
    var $this = $(this);

    // store text and clear
    text = $this.text();
    $this.css("white-space", "pre");
    $this.html("");

    return {
      animateText: function () {
        $this.html("");
        $.each(text.split(""), function (i, letter) {
          setTimeout(function () {
            $this.append(
              '<span class="text_animation" style="display: inline-block; animation: ' +
                animation +
                " " +
                animation_speed +
                "ms forwards" +
                '">' +
                letter +
                "</span>"
            );
          }, i * text_speed);
        });
      },
    };
  };
})(jQuery);

var $header = $(".bounce_in_animation");
var headerAnimation = $header.textAnimation(250, 50, "bounceIn");
headerAnimation.animateText(); // Run the animation initially

var prevScrollPos = $(window).scrollTop();
var animationDone = true;

$(window).on("scroll", function () {
  var currentScrollPos = $(window).scrollTop();

  if (prevScrollPos > currentScrollPos && animationDone) {
    animationDone = false;
    setTimeout(function () {
      headerAnimation.animateText();
    }, 250);
    setTimeout(function () {
      animationDone = true;
    }, 250 + 50 * $header.text().length);
  }
  prevScrollPos = currentScrollPos;
});



  $(document).ready(function() {
    $(".hover-element").hover(
      function() {
        // Mouse enter (hover) event
        $(this).animate({ color: "#FFA500" }, 300); // Change the color to orange
      },
      function() {
        // Mouse leave (unhover) event
        $(this).animate({ color: "#000000" }, 300); // Change the color back to black
      }
    );
  });
  
  // rotate the element when hovered over
  $(document).ready(function() {
    $(".hover-rotate").hover(
      function() {
        $(this).stop(true, true).css("transform", "rotate(360deg)");
      },
      function() {
        $(this).stop(true, true).css("transform", "rotate(0deg)");
      }
    );
  });
  
  // changes the scale when hovered over
  $(document).ready(function() {
    $(".hover-scale").hover(
      function() {
        $(this).animate({ fontSize: "2em" }, 300); // Scale up
      },
      function() {
        $(this).animate({ fontSize: "1em" }, 300); // Scale down
      }
    );
  });

  //working comments form, saves users comments under the homepage until user shuts
  //the website down using session storage.

  const commentsForm = document.querySelector('#comments-form');

  if (commentsForm) {
    const commentsContainer = document.createElement('div');
    document.body.appendChild(commentsContainer);
  
    // Add title to comments section
    const commentsTitle = document.createElement('h2');
    commentsTitle.textContent = 'Comments';
    commentsContainer.appendChild(commentsTitle);
  
    commentsForm.addEventListener('submit', submitComment);
  
    function submitComment(event) {
      event.preventDefault();
  
      const name = document.querySelector('#comment-name').value;
      const comment = document.querySelector('#comment').value;
  
      const newComment = { name, comment };
  
      // Store the comment in sessionStorage
      saveComment(newComment);
  
      addComment(newComment);
  
      event.target.reset();
    }
  
    function addComment(comment) {
      const commentElement = document.createElement('div');
      commentElement.innerHTML = `
        <p><strong>${comment.name} says:</strong> ${comment.comment}</p>
      `;
      commentsContainer.appendChild(commentElement);
    }
  
    function saveComment(comment) {
      let comments = JSON.parse(sessionStorage.getItem('comments')) || [];
      comments.push(comment);
      sessionStorage.setItem('comments', JSON.stringify(comments));
    }
  
    function loadComments() {
      let comments = JSON.parse(sessionStorage.getItem('comments')) || [];
      comments.forEach((comment) => addComment(comment));
    }
  
    // Load comments when the page loads from the navbar
    loadComments();
  }
  
  
  

  
  
  
  
  
  

  
  
  