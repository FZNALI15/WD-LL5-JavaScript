// ============================================================
// 🎟 Event Welcome Center — script.js
// JavaScript Foundations · Lab 5
// ============================================================


// ── Challenge 1: Event Information ──────────────────────────

let eventName = "Tech Summit";
let attendeeName = "Jordan";
let speakerName = "Dr. Lee";
let roomNumber = 204;

console.log(eventName);
console.log(attendeeName);
console.log(speakerName);
console.log(roomNumber);


// ── Challenge 2: Personalized Greetings ─────────────────────

console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log(attendeeName + " will be in Room " + roomNumber + ".");
console.log("Today's speaker is " + speakerName + ".");


// ── Challenge 3: Build Functions ────────────────────────────

function welcomeGuest() {
    console.log("Welcome " + attendeeName + " to " + eventName + "!");
}

function displaySessionInfo() {
    console.log("Your session with " + speakerName + " is in Room " + roomNumber + ".");
}

welcomeGuest();
displaySessionInfo();


// ── Challenge 4: Alert Messages ─────────────────────────────

alert("Welcome to " + eventName + "!");


// ── Challenge 5: Attendee Counter ───────────────────────────

let attendeeCount = 0;

console.log("Attendees: " + attendeeCount);

attendeeCount = attendeeCount + 1;

console.log("Attendees after check-in: " + attendeeCount);


// ── 🚀 Level Up 1: More Functions ───────────────────────────

function attendeeGreeting() {
    console.log(attendeeName + " just checked in!");
}

function displaySpeaker() {
    console.log("Today's speaker is " + speakerName + ".");
}

function displayRoom() {
    console.log("The event is in Room " + roomNumber + ".");
}

function displayAgenda() {
    console.log("Agenda: Welcome, Speaker Session, and Networking.");
}

attendeeGreeting();
displaySpeaker();
displayRoom();
displayAgenda();


// ── 🚀 Level Up 2: Multiple Attendees ───────────────────────

let attendee2 = "Sam";
let attendee3 = "Taylor";

console.log("Welcome " + attendeeName + "!");
console.log("Welcome " + attendee2 + "!");
console.log("Welcome " + attendee3 + "!");


// Simulate two more check-ins
attendeeCount++;
attendeeCount++;

console.log("Total attendees checked in: " + attendeeCount);


// ── 🚀 Level Up 3 & 4: Mini Conference Dashboard ────────────

console.info("Event: " + eventName);
console.info("Speaker: " + speakerName);
console.info("Room: " + roomNumber);
console.info("Checked In: " + attendeeCount);

console.warn("Remember to arrive at your session on time!");

console.table({
    Event: eventName,
    Speaker: speakerName,
    Room: roomNumber,
    Attendees: attendeeCount
});