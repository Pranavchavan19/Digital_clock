const countries = [
  { name: "India", timezone: "Asia/Kolkata" },
  { name: "USA", timezone: "America/New_York" },
  { name: "UK", timezone: "Europe/London" },
  { name: "Japan", timezone: "Asia/Tokyo" },
  { name: "Australia", timezone: "Australia/Sydney" },
  { name: "South Africa", timezone: "Africa/Johannesburg" },
  { name: "UAE", timezone: "Asia/Dubai" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "Germany", timezone: "Europe/Berlin" },
  { name: "France", timezone: "Europe/Paris" },
];

let interval; // For updating the clock
const searchInput = document.getElementById("search");
const countryList = document.getElementById("country-list");
const clock = document.getElementById("clock");

// Populate the country list based on the search query
function populateCountryList(query) {
  countryList.innerHTML = ""; // Clear previous results

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );

  filteredCountries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.textContent = country.name;
    div.setAttribute("data-timezone", country.timezone);

    // Add click event to select a country
    div.addEventListener("click", () => {
      const timezone = country.timezone;
      displayTime(timezone);
      searchInput.value = country.name; // Update input with selected country
      countryList.style.display = "none"; // Hide the list
      clearInterval(interval); // Clear any previous interval
      startClockInterval(timezone); // Start the interval for new timezone
    });

    countryList.appendChild(div);
  });

  // Show or hide the list
  countryList.style.display = filteredCountries.length > 0 ? "block" : "none";
}

// Display the current time for the selected timezone
function displayTime(timezone) {
  const time = new Date().toLocaleTimeString("en-US", { timeZone: timezone });
  clock.textContent = time;
}

// Start an interval to update the clock every second
function startClockInterval(timezone) {
  interval = setInterval(() => {
    displayTime(timezone);
  }, 1000);
}

// Event listener for the search box
searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  populateCountryList(query);
});

// On page load, initialize with a default timezone
window.onload = () => {
  const defaultTimezone = "Asia/Kolkata";
  displayTime(defaultTimezone);
  startClockInterval(defaultTimezone);
};


