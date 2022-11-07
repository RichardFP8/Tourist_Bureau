"use strict";
//aray for the main/first dropdown
let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

//array for second dropdown; activities based on main dropdown
let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

//call anonymous function on load
window.onload = function () {
    setupCategories();
    const getCategories = document.getElementById("main-categories");
    const selectedActivity = document.getElementById("activities");
    const getForm = document.getElementById("purchaseTickets");
    const resetBtn = document.getElementById("reset");
    //two dropdowns for their on change events; and the form's onsubmit
    getCategories.onchange = showActivities;
    selectedActivity.onchange = displayInformation;
    getForm.onsubmit = displayMessage;
    resetBtn.onclick = resetAll;
}
//create the <option> "array" for the the main <select>
function setupCategories() {
    const mainCategories = document.getElementById("main-categories");
    let length = categories.length;
    for (let i = 0; i < length; i++) {
        let createOption = new Option(categories[i], categories[i].toLowerCase());
        mainCategories.appendChild(createOption);
    }
}
//based on the above function ^; here is where the second dropdown's <option> is created
function showActivities() {
    const displayActivities = document.getElementById("activities");
    const category = document.getElementById("main-categories");
    const hideOtherContent = document.getElementById("activityInformation");
    const hideForm = document.getElementById("purchaseTickets");

    let categoryIndex = category.selectedIndex;
    let categoryValue = category.value;
    let mainLength = categories.length;

    //hide the content of the other HTML elements
    hideForm.style.display = "none";
    hideOtherContent.style.display = "none";
    //when the main dropdown is changed; reset the second dropdown to "Select one" option
    displayActivities.selectedIndex = 0;



    //outer loop; this will test the loop variable with the select' option's array, since they already start at 1
    for (let i = 1; i <= mainLength; i++) {
        if (i === categoryIndex) {
            //make sure the second dropdown only has one element on change event, which is the "Select one" option
            displayActivities.options.length = 1;
            //creating a new array for the objects in activities array related to the category selected
            let activitiesRelated = [];
            //go through each object in activities array and test if it matches
            let innerLength = activities.length;
            let index = 0;
            //if the category property matches the value of the selected category, add that to the new array
            for (let y = 0; y < innerLength; y++) {
                if (activities[y].category.toLowerCase() === categoryValue) {
                    activitiesRelated[index] = activities[y];
                    index++;
                }
            }
            //with the new array, we have a smaller set of elements; find the length 
            let newLength = activitiesRelated.length;
            //add each of the name properties to the second dropdown; value is their id property
            for (let x = 0; x < newLength; x++) {
                let activityOption = new Option(activitiesRelated[x].name, activitiesRelated[x].id.toLowerCase());
                displayActivities.appendChild(activityOption);
            }
            //display the second dropdown
            displayActivities.style.display = "block";
            break;
        }
    }
}
//here is where content of the second dropdown is shown; the properties/details of the activity
function displayInformation() {
    //get the selected activity; and get all HTML elements that will display info
    const activityList = document.getElementById("activities");
    const activityListValue = activityList.value;
    const showAll = document.getElementById("activityInformation");
    const getId = document.getElementById("activityId");
    const getName = document.getElementById("activityName");
    const getDescription = document.getElementById("activityDescription");
    const getLocation = document.getElementById("activityLocation");
    const getPrice = document.getElementById("activityPrice");

    //we'll test the selected activity with the id property in activities array
    let length = activities.length;

    //run through each object in the activities array
    for (let i = 0; i < length; i++) {
        /*turn the id value into lower case because in my previous function, I converted the elemen't value into lowercase
        This way it matches. I create a variable for it because I didn't like how it looked in my conditional...this is my project so */
        let theObject = activities[i];
        let value = theObject.id.toLowerCase();
        if (value === activityListValue) {
            //once the values match; display the content; get all properties and assign them to the corresponding element
            getId.innerHTML = "ID: " + theObject.id;
            getName.innerHTML = "Name: " + theObject.name;
            getDescription.innerHTML = "Description: " + theObject.description;
            getLocation.innerHTML = "Location: " + theObject.location;
            getPrice.innerHTML = "Price: $" + theObject.price;
            showAll.style.display = "block";

            /*(here, I'll call the function that displays the purchase tickets; here because I'm getting the price's value based on the activity selected;
            if test passes call the function else; just display and break from for loop*/
            if (theObject.price > 0.00) {
                displayForm();
            }
            break;
        }
    }
}
//short function, just displaying the form if there's an actual price; I gave it its own function b/c yes
function displayForm() {
    const test = document.getElementById("test");
    const getForm = document.getElementById("purchaseTickets");
    getForm.style.display = "block";
}
//for the form; I added test cases for user inputs and then displayed confirmation
function displayMessage() {
    // const test = document.getElementById("test");
    // get the value that was selected so that we can calculate price based off its price property and display its name as well
    const getValueSelected = document.getElementById("activities").value;
    //get user input
    const numOfTickets = Number(document.getElementById("numOfTickets").value);
    const getEmail = document.getElementById("emailAddress").value;
    const getCardNumber = document.getElementById("creditCard").value;
    const message = document.getElementById("error");
    const confirmation = document.getElementById("confirmation");
    let at = getEmail.indexOf("@");
    let period = getEmail.indexOf(".");
    //some test cases
    if ((numOfTickets === 0) || (numOfTickets < 0) || (numOfTickets > 100)) {
        message.innerHTML = "Not 0, no negatives, empties, or more than 100. Because no";
    }
    //some other test cases
    else if ((getCardNumber.length !== 9) || (getCardNumber.length > 9)) {
        message.innerHTML = "9 digits please";
    }
    //test case for email
    else if ((at === -1) || (period === -1)) {
        message.innerHTML = "Missing characters for the email";
    }
    //if it passes all the test, find the object in the activities array with the value retrieved
    else {
        message.innerHTML = "";
        let length = activities.length;
        let thePrice;
        let theName;
        for (let i = 0; i < length; i++) {
            if (getValueSelected === activities[i].id.toLowerCase()) {
                //once the values match, get the price and name property and get out
                thePrice = activities[i].price;
                theName = activities[i].name;
                break;
            }
        }
        let totalCost = numOfTickets * thePrice;
        confirmation.innerHTML = "Your credit card has been charged $" + totalCost + " for " + numOfTickets + " tickets to " + theName + " A confirmation email has been sent to " + getEmail;
    }

    return false;
}
function resetAll() {
    //get all user inputs, even confirmation and error message because yes 
    document.getElementById("numOfTickets").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("creditCard").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("confirmation").innerHTML = "";

}

/*
 kept this b/c this is the original work
function testFormInputs() {
    //get the value that was selected so that we can calculate price based off its price property and display its name as well
    const getValueSelected = document.getElementById("activities").value;
    //get user input
    const numOfTickets = Number(document.getElementById("numOfTickets").value);
    const getEmail = document.getElementById("emailAddress").value;
    const getCardNumber = document.getElementById("creditCard").value;
    const message = document.getElementById("error");
    const confirmation = document.getElementById("confirmation");
    let at = getEmail.indexOf("@");
    let period = getEmail.indexOf(".");
    //some test cases
    if ((numOfTickets === 0) || (numOfTickets < 0) || (numOfTickets > 100)) {
        message.innerHTML = "Not 0, no negatives, empties, or more than 100. Because no";
        return;
    }
    //some other test cases
    else if ((getCardNumber.length !== 9) || (getCardNumber.length > 9)) {
        message.innerHTML = "9 digits please";
        return;
    }

    //test case for email
    else if ((at === -1) || (period === -1)) {
        message.innerHTML = "Missing characters";
        return;
    }
    //if it passes all the test, find the object in the activities array with the value retrieved
    else {
        let length = activities.length;
        let thePrice;
        let theName;
        for (let i = 0; i < length; i++) {
            if (getValueSelected === activities[i].id.toLowerCase()) {
                //once the values match, get the price and name property and get out
                thePrice = activities[i].price;
                theName = activities[i].name;
                break;
            }
        }
        let totalCost = numOfTickets * thePrice;
        confirmation.innerHTML = "Your credit card has been charged $" + totalCost + " for " + numOfTickets + " tickets to " + theName + " A confirmation email has been sent to " + getEmail;
    }
}
*/
