document.addEventListener("DOMContentLoaded", function () {
    const faqContainer = document.querySelector(".faq-container");
    const newFaqForm = document.getElementById("new-faq-form");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
  
    // Function to remove a card
    function removeCard(card) {
      card.remove();
    }

    // Function to remove the "active" class from all cards
    function removeActiveClass() {
        const faqCards = document.querySelectorAll(".faq.active");
        faqCards.forEach((card) => {
        card.classList.remove("active");
        });
    }
  
    // Function to add a new card
    function addNewCard(question, answer) {
      const newCard = document.createElement("div");
      newCard.classList.add("faq");
      newCard.innerHTML = `
        <h3 class="faq-title">${question}</h3>
        <p class="faq-text">${answer}</p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      `;
  
      faqContainer.appendChild(newCard);
    }
  
    // Event listener for form submission
    newFaqForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const question = questionInput.value;
      const answer = answerInput.value;
      if (question && answer) {
        addNewCard(question, answer);
        questionInput.value = "";
        answerInput.value = "";
      }
    });
  
    // Event delegation for click events on dynamically added cards
    faqContainer.addEventListener("click", function (event) {
      const target = event.target;
      if (target.classList.contains("fa-chevron-down")) {
        removeActiveClass();
        target.parentElement.parentElement.classList.add("active");
      } else if (target.classList.contains("fa-times")) {
        removeCard(target.parentElement.parentElement);
      }
    });
  });
  