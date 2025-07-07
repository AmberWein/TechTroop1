// Weather Decision Making

let temperature = 20;
let weather = "sunny";

if (weather === "sunny") {
    if (temperature > 24) {
        console.log("Go to the beach");
    } else if (temperature >= 15 && temperature <= 24) {
        console.log("Go for a walk");
    } else { // temperature < 15
        console.log("Stay inside and read");
    }
} else if (weather === "rainy") {
    console.log("Watch a movie indoors");
} else if (weather === "cloudy") {
    if (temperature > 21) {
        console.log("Go hiking");
    } else { // temperature <= 21
        console.log("Visit a museum");
    }
}