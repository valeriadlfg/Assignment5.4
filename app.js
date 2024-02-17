function changeBackgroundColor() {

    document.body.style.backgroundColor="white";
}

function createNameListUsingFor() {
    var nameList = document.getElementById("nameList");

    
    nameList.innerHTML = '';

    
    for (var i = 1; i <= 5; i++) {
        var name = prompt("Enter name " + i + " (for loop):");
        if (name) {
            var listItem = document.createElement("li");
            listItem.textContent = name;
            nameList.appendChild(listItem);
        } else {
            break;
        }
    }
}

const foodTypes = ["Fruits", "Vegetables", "Grains", "Dairy", "Meat"];

let currentIndex = 0;

function displayCurrentFood() {
    document.getElementById("foodDisplay").textContent = foodTypes[currentIndex];
}


displayCurrentFood();


document.getElementById("nextButton").addEventListener("click", function() {
    
    while (currentIndex < foodTypes.length - 1) {
        
        currentIndex++;
       
        displayCurrentFood();
       
        break;
    }
    
    if (currentIndex >= foodTypes.length - 1) {
        currentIndex = 0;
        
        displayCurrentFood();
    }
});
