$(function() { 
    // Requirement: Initialize the pet's information in the HTML
    checkAndUpdatePetInfoInHtml("Welcome! I'm ready to hang out!");
  
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
});

// Requirement: Create pet_info object with name, weight, and happiness
var pet_info = {name: "Mochi", weight: 15, happiness: 10};

function clickedTreatButton() {
    $('.pet-image').fadeOut(100).fadeIn(100);
    $('#munch-sound').get(0).play();

    // Requirement: Add to happiness and weight 
    pet_info.happiness += 5;S
    pet_info.weight += 2;
    checkAndUpdatePetInfoInHtml("Yum! That treat was delicious!");
}

function clickedPlayButton() {
    // Requirement: Add to happiness and reduce weight 
     $('.pet-image').fadeOut(100).fadeIn(100);
    pet_info.happiness += 10;
    pet_info.weight -= 5;
    checkAndUpdatePetInfoInHtml("I love playing with you!");
}

function clickedExerciseButton() {
    // Requirement: Reduce happiness and weight 
    $('.pet-image').fadeOut(100).fadeIn(100);
    pet_info.happiness -= 5;
    pet_info.weight -= 5;
    checkAndUpdatePetInfoInHtml("Whew! That was a ruff workout.");
}

function clickedNapButton() { 
    // Requirement: Add a new action and behavior 
     $('.pet-image').fadeOut(100).fadeIn(100);
    pet_info.happiness += 2;
    checkAndUpdatePetInfoInHtml("Zzz... I feel refreshed.");
}

function checkAndUpdatePetInfoInHtml(comment) {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml(comment);
}

function checkWeightAndHappinessBeforeUpdating() {
    // Requirement: Fix bugs so values can't go below zero 
    if (pet_info.weight < 0) {
        pet_info.weight = 0;
    }
    if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
    }
}

function updatePetInfoInHtml(comment) {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
    
    /* UNIQUE METHOD 1: .slideToggle()
       This animates the element's height. We hide the text first
       then slide it in so the visual notification appears without an alert
    */
    $('#pet-comment').hide().text(comment).slideToggle(300);

    /* UNIQUE METHOD 2: .width()
       This sets the width of the element. We use it to make the 
       image size change based on the pet's weight property.
    */
    var dynamicWidth = 150 + (pet_info.weight * 2);
    $('.pet-image').width(dynamicWidth);
}