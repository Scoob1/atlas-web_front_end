// Create the user object
const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Guillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer"
};

// Define the logWelcomeUser function
function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind logWelcomeUser to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// bound funct
bindLogWelcomeUser("Welcome");
bindLogWelcomeUser("Hello");
