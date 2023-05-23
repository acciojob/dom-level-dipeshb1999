//your JS code here. If required.
// Find the DOM level of an element by its ID
function findDOMLevelById(elementId) {
    var element = document.getElementById(elementId);
    var level = 0;

    while (element.parentNode) {
        level++;
        element = element.parentNode;
    }

    return level;
}

// Call the function and display the result using alert()
var levelElementId = "level";
var level = findDOMLevelById(levelElementId);
alert("The level of the element is: " + level);
