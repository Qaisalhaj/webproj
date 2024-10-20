function addRecommendation() {
    // Get the input value
    const input = document.getElementById('recommendation_input');
    const recommendationText = input.value.trim(); // Remove any extra whitespace

    // Check if the input is not empty
    if (recommendationText !== "") {
        // Create a new list item
        const li = document.createElement('li');
        li.classList.add('Rcard'); // Add the 'card' class to the new list item
        li.textContent = recommendationText; // Set the text of the list item

        // Append the list item to the recommendations list
        const recommendationList = document.getElementById('recommendation_list');
        recommendationList.appendChild(li);

        // Clear the input field after adding the recommendation
        input.value = '';
        showModal();
    } else {
        alert("Please enter a recommendation."); // Alert if the input is empty
    }
}

function showModal() {
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "block"; // Show the modal
}

// Close the modal when the "OK" button is clicked
document.getElementById("okBtn").onclick = function() {
    document.getElementById("thankYouModal").style.display = "none"; // Hide the modal
};

// Close the modal when the close button (X) is clicked
document.getElementById("closeModal").onclick = function() {
    document.getElementById("thankYouModal").style.display = "none"; // Hide the modal
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("thankYouModal");
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
};

// Attach the onClick event to the button
document.getElementById('recommend_btn').onclick = addRecommendation;