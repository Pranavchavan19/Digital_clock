const countries = [
  { name: "Afghanistan", timezone: "Asia/Kabul" },
  { name: "Albania", timezone: "Europe/Tirane" },
  { name: "Algeria", timezone: "Africa/Algiers" },
  { name: "Andorra", timezone: "Europe/Andorra" },
  { name: "Angola", timezone: "Africa/Luanda" },
  { name: "Antigua and Barbuda", timezone: "America/Antigua" },
  { name: "Argentina", timezone: "America/Argentina/Buenos_Aires" },
  { name: "Armenia", timezone: "Asia/Yerevan" },
  { name: "Australia", timezone: "Australia/Sydney" },
  { name: "Austria", timezone: "Europe/Vienna" },
  { name: "Azerbaijan", timezone: "Asia/Baku" },
  { name: "Bahamas", timezone: "America/Nassau" },
  { name: "Bahrain", timezone: "Asia/Bahrain" },
  { name: "Bangladesh", timezone: "Asia/Dhaka" },
  { name: "Barbados", timezone: "America/Barbados" },
  { name: "Belarus", timezone: "Europe/Minsk" },
  { name: "Belgium", timezone: "Europe/Brussels" },
  { name: "Belize", timezone: "America/Belize" },
  { name: "Benin", timezone: "Africa/Porto-Novo" },
  { name: "Bhutan", timezone: "Asia/Thimphu" },
  { name: "Bolivia", timezone: "America/La_Paz" },
  { name: "Bosnia and Herzegovina", timezone: "Europe/Sarajevo" },
  { name: "Botswana", timezone: "Africa/Gaborone" },
  { name: "Brazil", timezone: "America/Sao_Paulo" },
  { name: "Brunei", timezone: "Asia/Brunei" },
  { name: "Bulgaria", timezone: "Europe/Sofia" },
  { name: "Burkina Faso", timezone: "Africa/Ouagadougou" },
  { name: "Burundi", timezone: "Africa/Bujumbura" },
  { name: "Cabo Verde", timezone: "Atlantic/Cape_Verde" },
  { name: "Cambodia", timezone: "Asia/Phnom_Penh" },
  { name: "Cameroon", timezone: "Africa/Douala" },
  { name: "Canada", timezone: "America/Toronto" },
  { name: "Central African Republic", timezone: "Africa/Bangui" },
  { name: "Chad", timezone: "Africa/N'Djamena" },
  { name: "Chile", timezone: "America/Santiago" },
  { name: "China", timezone: "Asia/Shanghai" },
  { name: "Colombia", timezone: "America/Bogota" },
  { name: "Comoros", timezone: "Indian/Comoros" },
  { name: "Congo (Congo-Brazzaville)", timezone: "Africa/Brazzaville" },
  { name: "Costa Rica", timezone: "America/Costa_Rica" },
  { name: "Croatia", timezone: "Europe/Zagreb" },
  { name: "Cuba", timezone: "America/Havana" },
  { name: "Cyprus", timezone: "Asia/Nicosia" },
  { name: "Czech Republic", timezone: "Europe/Prague" },
  { name: "Democratic Republic of the Congo", timezone: "Africa/Kinshasa" },
  { name: "Denmark", timezone: "Europe/Copenhagen" },
  { name: "Djibouti", timezone: "Africa/Djibouti" },
  { name: "Dominica", timezone: "America/Dominica" },
  { name: "Dominican Republic", timezone: "America/Santo_Domingo" },
  { name: "East Timor", timezone: "Asia/Dili" },
  { name: "Ecuador", timezone: "America/Guayaquil" },
  { name: "Egypt", timezone: "Africa/Cairo" },
  { name: "El Salvador", timezone: "America/El_Salvador" },
  { name: "Equatorial Guinea", timezone: "Africa/Malabo" },
  { name: "Eritrea", timezone: "Africa/Asmara" },
  { name: "Estonia", timezone: "Europe/Tallinn" },
  { name: "Eswatini", timezone: "Africa/Mbabane" },
  { name: "Ethiopia", timezone: "Africa/Addis_Ababa" },
  { name: "Fiji", timezone: "Pacific/Fiji" },
  { name: "Finland", timezone: "Europe/Helsinki" },
  { name: "France", timezone: "Europe/Paris" },
  { name: "Gabon", timezone: "Africa/Libreville" },
  { name: "Gambia", timezone: "Africa/Banjul" },
  { name: "Georgia", timezone: "Asia/Tbilisi" },
  { name: "Germany", timezone: "Europe/Berlin" },
  { name: "Ghana", timezone: "Africa/Accra" },
  { name: "Greece", timezone: "Europe/Athens" },
  { name: "Grenada", timezone: "America/Grenada" },
  { name: "Guatemala", timezone: "America/Guatemala" },
  { name: "Guinea", timezone: "Africa/Conakry" },
  { name: "Guinea-Bissau", timezone: "Africa/Bissau" },
  { name: "Guyana", timezone: "America/Guyana" },
  { name: "Haiti", timezone: "America/Port-au-Prince" },
  { name: "Honduras", timezone: "America/Tegucigalpa" },
  { name: "Hungary", timezone: "Europe/Budapest" },
  { name: "Iceland", timezone: "Atlantic/Reykjavik" },
  { name: "India", timezone: "Asia/Kolkata" },
  { name: "Indonesia", timezone: "Asia/Jakarta" },
  { name: "Iran", timezone: "Asia/Tehran" },
  { name: "Iraq", timezone: "Asia/Baghdad" },
  { name: "Ireland", timezone: "Europe/Dublin" },
  { name: "Israel", timezone: "Asia/Jerusalem" },
  { name: "Italy", timezone: "Europe/Rome" },
  { name: "Ivory Coast", timezone: "Africa/Abidjan" },
  { name: "Jamaica", timezone: "America/Jamaica" },
  { name: "Japan", timezone: "Asia/Tokyo" },
  { name: "Jordan", timezone: "Asia/Amman" },
  { name: "Kazakhstan", timezone: "Asia/Almaty" },
  { name: "Kenya", timezone: "Africa/Nairobi" },
  { name: "Kiribati", timezone: "Pacific/Kiritimati" },
  { name: "Korea, North", timezone: "Asia/Pyongyang" },
  { name: "Korea, South", timezone: "Asia/Seoul" },
  { name: "Kuwait", timezone: "Asia/Kuwait" },
  { name: "Kyrgyzstan", timezone: "Asia/Bishkek" },
  { name: "Laos", timezone: "Asia/Vientiane" },
  { name: "Latvia", timezone: "Europe/Riga" },
  { name: "Lebanon", timezone: "Asia/Beirut" },
  { name: "Lesotho", timezone: "Africa/Maseru" },
  { name: "Liberia", timezone: "Africa/Monrovia" },
  { name: "Libya", timezone: "Africa/Tripoli" },
  { name: "Liechtenstein", timezone: "Europe/Vaduz" },
  { name: "Lithuania", timezone: "Europe/Vilnius" },
  { name: "Luxembourg", timezone: "Europe/Luxembourg" },
  { name: "Madagascar", timezone: "Indian/Antananarivo" },
  { name: "Malawi", timezone: "Africa/Blantyre" },
  { name: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
  { name: "Maldives", timezone: "Indian/Maldives" },
  { name: "Mali", timezone: "Africa/Bamako" },
  { name: "Malta", timezone: "Europe/Malta" },
  { name: "Marshall Islands", timezone: "Pacific/Majuro" },
  { name: "Mauritania", timezone: "Africa/Nouakchott" },
  { name: "Mauritius", timezone: "Indian/Mauritius" },
  { name: "Mexico", timezone: "America/Mexico_City" },
  { name: "Micronesia", timezone: "Pacific/Chuuk" },
  { name: "Moldova", timezone: "Europe/Chisinau" },
  { name: "Monaco", timezone: "Europe/Monaco" },
  { name: "Mongolia", timezone: "Asia/Ulaanbaatar" },
  { name: "Montenegro", timezone: "Europe/Podgorica" },
  { name: "Morocco", timezone: "Africa/Casablanca" },
  { name: "Mozambique", timezone: "Africa/Maputo" },
  { name: "Myanmar", timezone: "Asia/Yangon" },
  { name: "Namibia", timezone: "Africa/Windhoek" },
  { name: "Nauru", timezone: "Pacific/Nauru" },
  { name: "Nepal", timezone: "Asia/Kathmandu" },
  { name: "Netherlands", timezone: "Europe/Amsterdam" },
  { name: "New Zealand", timezone: "Pacific/Auckland" },
  { name: "Nicaragua", timezone: "America/Managua" },
  { name: "Niger", timezone: "Africa/Niamey" },
  { name: "Nigeria", timezone: "Africa/Lagos" },
  { name: "North Macedonia", timezone: "Europe/Skopje" },
  { name: "Norway", timezone: "Europe/Oslo" },
  { name: "Oman", timezone: "Asia/Muscat" },
  { name: "Pakistan", timezone: "Asia/Karachi" },
  { name: "Palau", timezone: "Pacific/Palau" },
  { name: "Panama", timezone: "America/Panama" },
  { name: "Papua New Guinea", timezone: "Pacific/Port_Moresby" },
  { name: "Paraguay", timezone: "America/Asuncion" },
  { name: "Peru", timezone: "America/Lima" },
  { name: "Philippines", timezone: "Asia/Manila" },
  { name: "Poland", timezone: "Europe/Warsaw" },
  { name: "Portugal", timezone: "Europe/Lisbon" },
  { name: "Qatar", timezone: "Asia/Qatar" },
  { name: "Romania", timezone: "Europe/Bucharest" },
  { name: "Russia", timezone: "Europe/Moscow" },
  { name: "Rwanda", timezone: "Africa/Kigali" },
  { name: "Saint Kitts and Nevis", timezone: "America/St_Kitts" },
  { name: "Saint Lucia", timezone: "America/St_Lucia" },
  { name: "Saint Vincent and the Grenadines", timezone: "America/St_Vincent" },
  { name: "Samoa", timezone: "Pacific/Apia" },
  { name: "San Marino", timezone: "Europe/San_Marino" },
  { name: "Sao Tome and Principe", timezone: "Africa/Sao_Tome" },
  { name: "Saudi Arabia", timezone: "Asia/Riyadh" },
  { name: "Senegal", timezone: "Africa/Dakar" },
  { name: "Serbia", timezone: "Europe/Belgrade" },
  { name: "Seychelles", timezone: "Indian/Mahe" },
  { name: "Sierra Leone", timezone: "Africa/Freetown" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "Slovakia", timezone: "Europe/Bratislava" },
  { name: "Slovenia", timezone: "Europe/Ljubljana" },
  { name: "Solomon Islands", timezone: "Pacific/Guadalcanal" },
  { name: "Somalia", timezone: "Africa/Mogadishu" },
  { name: "South Africa", timezone: "Africa/Johannesburg" },
  { name: "South Korea", timezone: "Asia/Seoul" },
  { name: "South Sudan", timezone: "Africa/Juba" },
  { name: "Spain", timezone: "Europe/Madrid" },
  { name: "Sri Lanka", timezone: "Asia/Colombo" },
  { name: "Sudan", timezone: "Africa/Khartoum" },
  { name: "Suriname", timezone: "America/Paramaribo" },
  { name: "Sweden", timezone: "Europe/Stockholm" },
  { name: "Switzerland", timezone: "Europe/Zurich" },
  { name: "Syria", timezone: "Asia/Damascus" },
  { name: "Taiwan", timezone: "Asia/Taipei" },
  { name: "Tajikistan", timezone: "Asia/Dushanbe" },
  { name: "Tanzania", timezone: "Africa/Dar_es_Salaam" },
  { name: "Thailand", timezone: "Asia/Bangkok" },
  { name: "Togo", timezone: "Africa/Lome" },
  { name: "Tonga", timezone: "Pacific/Tongatapu" },
  { name: "Trinidad and Tobago", timezone: "America/Port_of_Spain" },
  { name: "Tunisia", timezone: "Africa/Tunis" },
  { name: "Turkey", timezone: "Europe/Istanbul" },
  { name: "Turkmenistan", timezone: "Asia/Ashgabat" },
  { name: "Tuvalu", timezone: "Pacific/Funafuti" },
  { name: "Uganda", timezone: "Africa/Kampala" },
  { name: "Ukraine", timezone: "Europe/Kiev" },
  { name: "United Arab Emirates", timezone: "Asia/Dubai" },
  { name: "United Kingdom", timezone: "Europe/London" },
  { name: "United States", timezone: "America/New_York" },
  { name: "Uruguay", timezone: "America/Montevideo" },
  { name: "Uzbekistan", timezone: "Asia/Tashkent" },
  { name: "Vanuatu", timezone: "Pacific/Port_Vila" },
  { name: "Vatican City", timezone: "Europe/Vatican" },
  { name: "Venezuela", timezone: "America/Caracas" },
  { name: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
  { name: "Yemen", timezone: "Asia/Aden" },
  { name: "Zambia", timezone: "Africa/Lusaka" },
  { name: "Zimbabwe", timezone: "Africa/Harare" }
]


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


