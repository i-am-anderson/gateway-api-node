const create_user = (length) =>
  Array.from({ length }, (_, index) => {
    const firstName = [
      "James",
      "Mary",
      "Michael",
      "Patricia",
      "Robert",
      "Jennifer",
      "John",
      "Linda",
      "David",
      "Elizabeth",
      "William",
      "Barbara",
      "Richard",
      "Susan",
      "Joseph",
      "Jessica",
      "Thomas",
      "Karen",
      "Christopher",
      "Sarah",
      "Charles",
      "Lisa",
      "Daniel",
      "Nancy",
      "Matthew",
      "Sandra",
      "Anthony",
      "Betty",
      "Mark",
      "Ashley",
      "Donald",
      "Emily",
      "Steven",
      "Kimberly",
      "Andrew",
      "Margaret",
      "Paul",
      "Donna",
      "Joshua",
      "Michelle",
      "Kenneth",
      "Carol",
      "Kevin",
      "Amanda",
      "Brian",
      "Melissa",
      "Timothy",
      "Deborah",
      "Ronald",
      "Stephanie",
      "George",
      "Rebecca",
      "Jason",
      "Sharon",
      "Edward",
      "Laura",
      "Jeffrey",
      "Cynthia",
      "Ryan",
      "Dorothy",
      "Jacob",
      "Amy",
      "Nicholas",
      "Kathleen",
      "Gary",
      "Angela",
      "Eric",
      "Shirley",
      "Jonathan",
      "Emma",
      "Stephen",
      "Brenda",
      "Larry",
      "Pamela",
      "Justin",
      "Nicole",
      "Scott",
      "Anna",
      "Brandon",
      "Samantha",
      "Benjamin",
      "Katherine",
      "Samuel",
      "Christine",
      "Gregory",
      "Debra",
      "Alexander",
      "Rachel",
      "Patrick",
      "Carolyn",
      "Frank",
      "Janet",
      "Raymond",
      "Maria",
      "Jack",
      "Olivia",
      "Dennis",
      "Heather",
      "Jerry",
      "Helen",
      "Tyler",
      "Catherine",
      "Aaron",
      "Diane",
      "Jose",
      "Julie",
      "Adam",
      "Victoria",
      "Nathan",
      "Joyce",
      "Henry",
      "Lauren",
      "Zachary",
      "Kelly",
      "Douglas",
      "Christina",
      "Peter",
      "Ruth",
      "Kyle",
      "Joan",
      "Noah",
      "Virginia",
      "Ethan",
      "Judith",
      "Jeremy",
      "Evelyn",
      "Christian",
      "Hannah",
      "Walter",
      "Andrea",
      "Keith",
      "Megan",
      "Austin",
      "Cheryl",
      "Roger",
      "Jacqueline",
      "Terry",
      "Madison",
      "Sean",
      "Teresa",
      "Gerald",
      "Abigail",
      "Carl",
      "Sophia",
      "Dylan",
      "Martha",
      "Harold",
      "Sara",
      "Jordan",
      "Gloria",
      "Jesse",
      "Janice",
      "Bryan",
      "Kathryn",
      "Lawrence",
      "Ann",
      "Arthur",
      "Isabella",
      "Gabriel",
      "Judy",
      "Bruce",
      "Charlotte",
      "Logan",
      "Julia",
      "Billy",
      "Grace",
      "Joe",
      "Amber",
      "Alan",
      "Alice",
      "Juan",
      "Jean",
      "Elijah",
      "Denise",
      "Willie",
      "Frances",
      "Albert",
      "Danielle",
      "Wayne",
      "Marilyn",
      "Randy",
      "Natalie",
      "Mason",
      "Beverly",
      "Vincent",
      "Diana",
      "Liam",
      "Brittany",
      "Roy",
      "Theresa",
      "Bobby",
      "Kayla",
      "Caleb",
      "Alexis",
      "Bradley",
      "Doris",
      "Russell",
      "Lori",
      "Lucas",
      "Tiffany",
    ];

    const lastName = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Gonzalez",
      "Wilson",
      "Anderson",
      "Thomas",
      "Taylor",
      "Moore",
      "Jackson",
      "Martin",
      "Lee",
      "Perez",
      "Thompson",
      "White",
      "Harris",
      "Sanchez",
      "Clark",
      "Ramirez",
      "Lewis",
      "Robinson",
      "Walker",
      "Young",
      "Allen",
      "King",
      "Wright",
      "Scott",
      "Torres",
      "Nguyen",
      "Hill",
      "Flores",
      "Green",
      "Adams",
      "Nelson",
      "Baker",
      "Hall",
      "Rivera",
      "Campbell",
      "Mitchell",
      "Carter",
      "Roberts",
      "Gomez",
      "Phillips",
      "Evans",
      "Turner",
      "Diaz",
      "Parker",
      "Cruz",
      "Edwards",
      "Collins",
      "Reyes",
      "Stewart",
      "Morris",
      "Morales",
      "Murphy",
      "Cook",
      "Rogers",
      "Gutierrez",
      "Ortiz",
      "Morgan",
      "Cooper",
      "Peterson",
      "Bailey",
      "Reed",
      "Kelly",
      "Howard",
      "Ramos",
      "Kim",
      "Cox",
      "Ward",
      "Richardson",
      "Watson",
      "Brooks",
      "Chavez",
      "Wood",
      "James",
      "Bennett",
      "Gray",
      "Mendoza",
      "Ruiz",
      "Hughes",
      "Price",
      "Alvarez",
      "Castillo",
      "Sanders",
      "Patel",
      "Myers",
      "Long",
      "Ross",
      "Foster",
      "Jimenez",
      "Powell",
      "Jenkins",
      "Perry",
      "Russell",
      "Sullivan",
      "Bell",
      "Coleman",
      "Butler",
      "Henderson",
      "Barnes",
      "Gonzales",
      "Fisher",
      "Vasquez",
      "Simmons",
      "Romero",
      "Jordan",
      "Patterson",
      "Alexander",
      "Hamilton",
      "Graham",
      "Reynolds",
      "Griffin",
      "Wallace",
      "Moreno",
      "West",
      "Cole",
      "Hayes",
      "Bryant",
      "Herrera",
      "Gibson",
      "Ellis",
      "Tran",
      "Medina",
      "Aguilar",
      "Stevens",
      "Murray",
      "Ford",
      "Castro",
      "Marshall",
      "Owens",
      "Harrison",
      "Fernandez",
      "Mcdonald",
      "Woods",
      "Washington",
      "Kennedy",
      "Wells",
      "Vargas",
      "Henry",
      "Chen",
      "Freeman",
      "Webb",
      "Tucker",
      "Guzman",
      "Burns",
      "Crawford",
      "Olson",
      "Simpson",
      "Porter",
      "Hunter",
      "Gordon",
      "Mendez",
      "Silva",
      "Shaw",
      "Snyder",
      "Mason",
      "Dixon",
      "Munoz",
      "Hunt",
      "Hicks",
      "Holmes",
      "Palmer",
      "Wagner",
      "Black",
      "Robertson",
      "Boyd",
      "Rose",
      "Stone",
      "Salazar",
      "Fox",
      "Warren",
      "Mills",
      "Meyer",
      "Rice",
      "Schmidt",
      "Garza",
      "Daniels",
      "Ferguson",
      "Nichols",
      "Stephens",
      "Soto",
      "Weaver",
      "Ryan",
      "Gardner",
      "Payne",
      "Grant",
      "Dunn",
      "Kelley",
      "Spencer",
    ];

    const domains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "aol.com",
      "hotmail.co.uk",
      "hotmail.fr",
      "msn.com",
      "yahoo.fr",
      "wanadoo.fr",
      "orange.fr",
      "comcast.net",
      "yahoo.co.uk",
      "yahoo.com.br",
      "yahoo.co.in",
      "live.com",
      "rediffmail.com",
      "free.fr",
      "gmx.de",
      "web.de",
      "yandex.ru",
      "ymail.com",
      "libero.it",
      "outlook.com",
      "uol.com.br",
      "bol.com.br",
      "mail.ru",
      "cox.net",
      "hotmail.it",
      "sbcglobal.net",
      "sfr.fr",
      "live.fr",
      "verizon.net",
      "live.co.uk",
      "googlemail.com",
      "yahoo.es",
      "ig.com.br",
      "live.nl",
      "bigpond.com",
      "terra.com.br",
      "yahoo.it",
      "neuf.fr",
      "yahoo.de",
      "alice.it",
      "rocketmail.com",
      "att.net",
      "laposte.net",
      "facebook.com",
      "bellsouth.net",
      "yahoo.in",
      "hotmail.es",
      "charter.net",
      "yahoo.ca",
      "yahoo.com.au",
      "rambler.ru",
      "hotmail.de",
      "tiscali.it",
      "shaw.ca",
      "yahoo.co.jp",
      "sky.com",
      "earthlink.net",
      "optonline.net",
      "freenet.de",
      "t-online.de",
      "aliceadsl.fr",
      "virgilio.it",
      "home.nl",
      "qq.com",
      "telenet.be",
      "me.com",
      "yahoo.com.ar",
      "tiscali.co.uk",
      "yahoo.com.mx",
      "voila.fr",
      "gmx.net",
      "mail.com",
      "planet.nl",
      "tin.it",
      "live.it",
      "ntlworld.com",
      "arcor.de",
      "yahoo.co.id",
      "frontiernet.net",
      "hetnet.nl",
      "live.com.au",
      "yahoo.com.sg",
      "zonnet.nl",
      "club-internet.fr",
      "juno.com",
      "optusnet.com.au",
      "blueyonder.co.uk",
      "bluewin.ch",
      "skynet.be",
      "sympatico.ca",
      "windstream.net",
      "mac.com",
      "centurytel.net",
      "chello.nl",
      "live.ca",
      "aim.com",
      "bigpond.net.au",
    ];

    const name = `${firstName[Math.floor(Math.random() * firstName.length)]} ${
      lastName[Math.floor(Math.random() * lastName.length)]
    }`;
    const email = `${name.toLowerCase().replace(/ /g, ".")}@${
      domains[Math.floor(Math.random() * domains.length)]
    }`;
    const age = Math.floor(Math.random() * 60) + 18;
    const city = [
      "New York City",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "Jacksonville",
      "Fort Worth",
      "Austin",
      "San Jose",
      "Charlotte",
      "Columbus",
      "Indianapolis",
      "San Francisco",
      "Seattle",
      "Denver",
      "Oklahoma City",
      "Nashville",
      "Washington",
      "El Paso",
      "Las Vegas",
      "Boston",
      "Detroit",
      "Portland",
      "Louisville",
      "Memphis",
      "Baltimore",
      "Albuquerque",
      "Milwaukee",
      "Tucson",
      "Fresno",
      "Sacramento",
      "Atlanta",
      "Mesa",
      "Kansas City",
      "Colorado Springs",
      "Raleigh",
      "Omaha",
      "Miami",
      "Virginia Beach",
      "Long Beach",
      "Oakland",
      "Minneapolis",
      "Bakersfield",
      "Tulsa",
      "Tampa",
      "Arlington",
      "Aurora",
      "Wichita",
      "Cleveland",
      "New Orleans",
      "Henderson",
      "Honolulu",
      "Anaheim",
      "Orlando",
      "Riverside",
      "Lexington",
      "Stockton",
      "Irvine",
      "Corpus Christi",
      "Cincinnati",
      "Santa Ana",
      "Greensboro",
      "Pittsburgh",
      "Newark",
      "St. Paul",
      "Durham",
      "Lincoln",
      "North Las Vegas",
      "Jersey City",
      "Plano",
      "Anchorage",
      "Madison",
      "Chandler",
      "Reno",
      "Gilbert",
      "St. Louis",
      "Chula Vista",
      "Buffalo",
      "Fort Wayne",
      "Lubbock",
      "St. Petersburg",
      "Toledo",
      "Laredo",
      "Port St. Lucie",
      "Glendale",
      "Chesapeake",
      "Winston-Salem",
      "Irving",
      "Scottsdale",
      "Enterprise",
      "Garland",
      "Arlington",
      "Boise City",
      "Cape Coral",
      "Frisco",
      "Richmond",
      "Spokane",
      "Norfolk",
      "Huntsville",
      "Spring Valley",
      "Fremont",
      "San Bernardino",
      "Tacoma",
      "Santa Clarita",
      "Hialeah",
      "Modesto",
      "McKinney",
      "Fontana",
      "Baton Rouge",
      "Moreno Valley",
      "Salt Lake City",
      "Sioux Falls",
      "Fayetteville",
      "Des Moines",
      "Worcester",
      "Yonkers",
      "Rochester",
      "Little Rock",
      "Grand Prairie",
      "Tallahassee",
      "Amarillo",
      "Peoria",
      "Augusta",
      "Knoxville",
      "Columbus",
      "Sunrise Manor",
      "Vancouver",
      "Oxnard",
      "Overland Park",
      "Grand Rapids",
      "Birmingham",
      "Montgomery",
      "Tempe",
      "Brownsville",
      "Providence",
      "Huntington Beach",
      "Chattanooga",
      "Akron",
      "Clarksville",
      "Fort Lauderdale",
      "Ontario",
      "Paradise",
      "Glendale",
      "Newport News",
      "Cary",
      "Mobile",
      "Elk Grove",
      "Eugene",
      "Salem",
      "Aurora",
      "Santa Rosa",
      "Shreveport",
      "Rancho Cucamonga",
      "Pembroke Pines",
      "Springfield",
      "Fort Collins",
      "Murfreesboro",
      "Oceanside",
      "Garden Grove",
      "Denton",
      "Lancaster",
      "Surprise",
      "Roseville",
      "Killeen",
      "Corona",
      "Palmdale",
      "Salinas",
      "Charleston",
      "Macon-Bibb County",
      "Lakewood",
      "Paterson",
      "Hollywood",
      "Alexandria",
      "Hayward",
      "Springfield",
      "Kansas City",
      "Bellevue",
      "Sunnyvale",
      "Joliet",
      "Naperville",
      "Olathe",
      "Bridgeport",
      "McAllen",
      "Savannah",
      "Escondido",
      "Gainesville",
      "Mesquite",
      "Waco",
      "Visalia",
      "Thornton",
      "Rockford",
      "Syracuse",
      "Pasadena",
      "Columbia",
      "Pomona",
      "Palm Bay",
      "Jackson",
      "Metairie",
      "Victorville",
      "Midland",
      "Meridian",
      "Miramar",
      "Orange",
      "Fullerton",
      "New Haven",
      "Hampton",
      "Torrance",
      "Stamford",
      "Lewisville",
      "Warren",
      "Fargo",
      "Elizabeth",
      "Cedar Rapids",
      "Coral Springs",
      "Dayton",
      "Round Rock",
      "Sterling Heights",
      "Carrollton",
      "West Valley City",
      "Kent",
      "Pasadena",
      "Santa Clara",
      "Lehigh Acres",
      "Norman",
      "Columbia",
      "Abilene",
      "Athens",
      "Pearland",
      "Clovis",
      "College Station",
      "West Palm Beach",
      "Topeka",
      "Lakeland",
      "Wilmington",
      "Simi Valley",
      "Allentown",
      "North Charleston",
      "Rochester",
      "The Woodlands",
      "Thousand Oaks",
      "Billings",
      "Vallejo",
      "Lafayette",
      "Concord",
      "Fairfield",
      "Broken Arrow",
      "Arvada",
      "Independence",
      "Spring Hill",
      "Hartford",
      "Nampa",
      "Cambridge",
      "Ann Arbor",
      "Antioch",
      "High Point",
      "New Braunfels",
      "Berkeley",
      "League City",
      "Menifee",
      "Brandon",
      "Richardson",
      "Clearwater",
      "Goodyear",
      "Odessa",
      "Las Cruces",
      "East Los Angeles",
      "Manchester",
      "Waterbury",
      "Evansville",
      "Westminster",
      "West Jordan",
      "Pompano Beach",
      "Buckeye",
      "Conroe",
      "Lowell",
      "Greeley",
      "Tuscaloosa",
      "Allen",
      "Richmond",
      "Carlsbad",
      "Elgin",
      "Provo",
      "Rio Rancho",
      "Murrieta",
      "Lansing",
      "Springfield",
      "Concord",
      "South Fulton",
      "Tyler",
      "Beaumont",
      "Everett",
      "Temecula",
      "Pueblo",
      "Sparks",
      "Miami Gardens",
      "Santa Maria",
      "Spokane Valley",
      "Peoria",
      "Gresham",
      "San Buenaventura (Ventura)",
      "Davie",
      "Jurupa Valley",
      "Hillsboro",
      "Columbia",
      "Sugar Land",
      "Riverview",
      "Edinburg",
      "St. George",
      "Costa Mesa",
      "Downey",
      "Centennial",
      "Palm Coast",
      "Bend",
      "Fishers",
      "Georgetown",
      "Green Bay",
      "Boulder",
      "Lees Summit",
      "Sandy Springs",
      "Brockton",
      "Dearborn",
      "San Tan Valley",
      "West Covina",
      "Fayetteville",
      "Renton",
      "South Bend",
      "Rialto",
      "Carmel",
      "Wichita Falls",
      "Vacaville",
      "Suffolk",
      "Highlands Ranch",
      "Albany",
      "El Monte",
      "Yuma",
      "El Cajon",
      "Quincy",
      "Inglewood",
      "Burbank",
      "Lynn",
      "Hesperia",
      "Chico",
      "Fort Myers",
      "New Bedford",
      "Boca Raton",
      "Deltona",
    ][Math.floor(Math.random() * 5)];

    return {
      id: index + 1,
      name,
      email,
      age,
      city,
    };
  });

export default create_user;
