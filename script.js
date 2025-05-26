window.onload = function () {
  const modal = document.getElementById("login-modal");
  const skipBtn = document.getElementById("skip-login");
  const loginBtn = document.getElementById("login-btn");
  const registerLink = document.querySelector(".register-link a");
  const forgotLink = document.querySelector(".forgot-link a");

  if (modal) modal.style.display = "flex";

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      showLoginForm();
    });
  }

  if (registerLink) {
    registerLink.addEventListener("click", function (e) {
      e.preventDefault();
      showRegisterForm();
    });
  }

  if (forgotLink) {
    forgotLink.addEventListener("click", function (e) {
      e.preventDefault();
      showForgotForm();
    });
  }
};

// Show Login Form in Modal
function showLoginForm() {
  const modalContent = document.querySelector("#login-modal .modal-content");
  if (modalContent) {
// ...existing code...
modalContent.innerHTML = `
  <form class="custom-login-form">
    <h2 class="custom-login-title">Login</h2>
    <div class="custom-input-group">
      <i class="fa-regular fa-envelope"></i>
      <input type="email" id="email" class="custom-login-input" placeholder="Enter your email" autocomplete="username" />
    </div>
    <div class="custom-input-group">
      <i class="fa-solid fa-key"></i>
      <input type="password" id="password" class="custom-login-input" placeholder="Enter password" autocomplete="current-password" />
    </div>
    <div class="custom-login-links">
      <a href="#" class="custom-forgot-link">Forgot Password?</a>
    </div>
    <button type="button" class="custom-login-btn">Sign in</button>
    <button type="button" id="skip-login" class="custom-login-btn" style="background:#38F8B2; color:#181f2a; margin-top:4px;">Skip</button>
    <div class="custom-divider"><span>Login with social</span></div>
    <div class="custom-social-row">
      <button type="button" class="custom-social-btn" title="Google"><i class="fab fa-google"></i></button>
      <button type="button" class="custom-social-btn" title="Linked-in"><i class="fa-brands fa-linkedin"></i></button>
      <button type="button" class="custom-social-btn" title="GitHub"><i class="fab fa-github"></i></button>
    </div>
    <div class="custom-signup-row">
      <span>Don't have an account?</span>
      <a href="#" class="custom-signup-link">Sign up</a>
    </div>
  </form>
`;

    modalContent.querySelector(".custom-forgot-link").addEventListener("click", function (e) {
      e.preventDefault();
      showForgotForm();
    });
    modalContent.querySelector(".custom-signup-link").addEventListener("click", function (e) {
      e.preventDefault();
      showRegisterForm();
    });
    modalContent.querySelector(".custom-login-btn").addEventListener("click", function () {
      document.getElementById("login-modal").style.display = "none";
    });

modalContent.querySelector("#skip-login").addEventListener("click", function () {
  document.getElementById("login-modal").style.display = "none";
});

  }
}

// Show Register Form in Modal
function showRegisterForm() {
  const modalContent = document.querySelector("#login-modal .modal-content");
  if (modalContent) {
    modalContent.innerHTML = `
      <form class="custom-login-form">
        <h2 class="custom-login-title">Register</h2>
        <div class="custom-input-group">
          <i class="fa-regular fa-envelope"></i>
          <input type="email" id="reg-email" class="custom-login-input" placeholder="Enter your email" autocomplete="email" />
        </div>
        <div class="custom-input-group">
          <i class="fa-solid fa-key"></i>
          <input type="password" id="reg-password" class="custom-login-input" placeholder="Create password" autocomplete="new-password" />
        </div>
        <button type="button" class="custom-login-btn">Sign up</button>
        <div class="custom-divider"><span>Register with social</span></div>
        <div class="custom-social-row">
          <button type="button" class="custom-social-btn" title="Google"><i class="fab fa-google"></i></button>
          <button type="button" class="custom-social-btn" title="Twitter"><i class="fab fa-twitter"></i></button>
          <button type="button" class="custom-social-btn" title="GitHub"><i class="fab fa-github"></i></button>
        </div>
        <div class="custom-signup-row">
          <span>Already have an account?</span>
          <a href="#" class="custom-signup-link">Login</a>
        </div>
      </form>
    `;
    modalContent.querySelector(".custom-signup-link").addEventListener("click", function (e) {
      e.preventDefault();
      showLoginForm();
    });
    modalContent.querySelector(".custom-login-btn").addEventListener("click", function () {
      document.getElementById("login-modal").style.display = "none";
    });
  }
}

// Show Forgot Password Form in Modal
function showForgotForm() {
  const modalContent = document.querySelector("#login-modal .modal-content");
  if (modalContent) {
    modalContent.innerHTML = `
      <form class="custom-login-form">
        <h2 class="custom-login-title">Forgot Password</h2>
        <div class="custom-input-group">
          <i class="fa-regular fa-envelope"></i>
          <input type="email" id="forgot-email" class="custom-login-input" placeholder="Enter your email" autocomplete="email" />
        </div>
        <button type="button" class="custom-login-btn">Send Reset Link</button>
        <div class="custom-signup-row" style="margin-top:10px;">
          <span>Remembered?</span>
          <a href="#" class="custom-signup-link">Login</a>
        </div>
      </form>
    `;
    modalContent.querySelector(".custom-signup-link").addEventListener("click", function (e) {
      e.preventDefault();
      showLoginForm();
    });
    modalContent.querySelector(".custom-login-btn").addEventListener("click", function () {
      document.getElementById("login-modal").style.display = "none";
    });
  }
}

// Always show login modal on page load
document.addEventListener("DOMContentLoaded", function() {
  showLoginForm();
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    loginModal.style.display = "flex";
  }
});

// Start Quiz button logic for main page
document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("start-quiz-btn");
  const catModal = document.getElementById("category-modal");
  const cancelCatModal = document.getElementById("cancel-category-modal");
  const startQuizModalBtn = document.getElementById("start-quiz-modal-btn");
  const catSelectModal = document.getElementById("category-select-modal");

  if (startBtn && catModal) {
    startBtn.addEventListener("click", function() {
      catModal.style.display = "flex";
    });
  }
  if (cancelCatModal && catModal) {
    cancelCatModal.addEventListener("click", function() {
      catModal.style.display = "none";
    });
  }
  if (startQuizModalBtn && catSelectModal && catModal) {
    startQuizModalBtn.addEventListener("click", function() {
      const selectedCategory = catSelectModal.value;
      catModal.style.display = "none";
      startQuiz(selectedCategory);
    });
  }
});

// Function to start quiz based on selected category
document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.querySelector('nav ul li a[href="#"]');
  if (homeLink) {
    homeLink.addEventListener("click", function(e) {
      e.preventDefault();
      const main = document.querySelector("main");
      main.innerHTML = `
        <h1>Welcome to AptitudeArena</h1>
        <button id="start-quiz-btn" style="margin: 24px 0 18px 0; padding: 12px 32px; font-size: 1.1rem; background: #38bdf8; color: #1e293b; border: none; border-radius: 6px; cursor: pointer;">Start Quiz</button>
      `;
      // Re-attach Start Quiz modal logic
      const startBtn = document.getElementById("start-quiz-btn");
      const catModal = document.getElementById("category-modal");
      if (startBtn && catModal) {
        startBtn.addEventListener("click", function() {
          catModal.style.display = "flex";
        });
      }
    });
  }
});

// Close category modal if click outside modal-content
document.addEventListener("DOMContentLoaded", function() {
  const catModal = document.getElementById("category-modal");
  if (catModal) {
    catModal.addEventListener("click", function(e) {
      if (e.target === catModal) {
        catModal.style.display = "none";
      }
    });
  }
});

// Close login modal if click outside modal-content
document.addEventListener("DOMContentLoaded", function() {
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    loginModal.addEventListener("click", function(e) {
      if (e.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  }
});

// Show footer only after scrolling down 200px
window.addEventListener("scroll", function() {
  const footer = document.getElementById("contact-footer");
  if (!footer) return;
  if (window.scrollY > 200) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});
window.addEventListener("scroll", function() {
  const footer = document.getElementById("contact-footer");
  if (!footer) return;
  if (window.scrollY > 20) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});

// User icon click shows login modal
document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.getElementById("user-icon-link");
  const loginModal = document.getElementById("login-modal");
  if (userIcon && loginModal) {
    userIcon.addEventListener("click", function(e) {
      e.preventDefault();
      showLoginForm();
      loginModal.style.display = "flex";
    });
  }
});

// Responsive hamburger menu
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("header nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function() {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
});
// Start Quiz button logic for main page
document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("start-quiz-btn");
  const catModal = document.getElementById("category-modal");
  const cancelCatModal = document.getElementById("cancel-category-modal");
  const startQuizModalBtn = document.getElementById("start-quiz-modal-btn");
  const catSelectModal = document.getElementById("category-select-modal");

  if (startBtn && catModal) {
    startBtn.addEventListener("click", function() {
      catModal.style.display = "flex";
    });
  }
  if (cancelCatModal && catModal) {
    cancelCatModal.addEventListener("click", function() {
      catModal.style.display = "none";
    });
  }
  if (startQuizModalBtn && catSelectModal && catModal) {
    startQuizModalBtn.addEventListener("click", function() {
      const selectedCategory = catSelectModal.value;
      catModal.style.display = "none";
      startQuiz(selectedCategory);
    });
  }
});

// Questions per category
const questionsByCategory = {
  science: [
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "What is the unit of 'Force'?",
      options: ["Kelvin", "Newton", "Joule", "Calorie"],
      answer: "Newton"
    },
    {
      question: "What is the main function of red blood cells?",
      options: ["To carry Oxygen", "To fight infections", "To help with blood clotting", "all of these"],
      answer: "To carry Oxygen"
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["3,000 km/s", "150,000 km/s", "300,000 km/s", "30,000 km/s"],
      answer: "300,000 km/s"
    },
    {
      question: "Which of the following is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
      answer: "Helium"
    },
    {
      question: "What is the atomic number of cardon?",
      options: ["12", "8", "4", "6"],
      answer: "6"
    },
    {
      question: "What is the main cause of global warming?",
      options: ["Greenhouse gas emissions", "Deforestation", "Increased oxygen levels", "Recycling"],
      answer: "Greenhouse gas emissions"
    },
    {
      question: "What is the main source of energy of Earth's ecosystem?",
      options: ["Wind", "The Moon", "Fossil fuels", "The Sun"],
      answer: "The Sun"
    },
    {
      question: "What does DNA stand for?",
      options: ["Digital Nucleotide Array", "Deoxyribonucleic Acid", "Dual Nitrogen Acid", "Dynamic Nucleotide Arrangement"],
      answer: "Deoxyribonucleic Acid"
    },
    {
      question: "Which tool is used to observe very small objects like cells?",
      options: ["Telescope", "Microscope", "Stethoscope", "Periscope"],
      answer: "Microscope"
    },
  ],
  history: [
  {
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1941", "1947"],
    answer: "1945"
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Roman Empire", "Ottoman Empire", "British Empire", "Mongol Empire"],
    answer: "Roman Empire"
  },
  {
    question: "Who was the British Prime Minister during most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Margaret Thatcher"],
    answer: "Winston Churchill"
  },
  {
    question: "The Great Wall of China was primarily built to protect against which group?",
    options: ["Japanese", "Russians", "Mongols", "Tibetans"],
    answer: "Mongols"
  },
  {
    question: "What was the name of the ship on which the Pilgrims traveled to North America in 1620?",
    options: ["Santa Maria", "Endeavour", "Mayflower", "Victoria"],
    answer: "Mayflower"
  },
  {
    question: "Which civilization built Machu Picchu?",
    options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
    answer: "Incas"
  },
  {
    question: "Who discovered the sea route to India in 1498?",
    options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
    answer: "Vasco da Gama"
  },
  {
    question: "What was the name of the first artificial Earth satellite launched in 1957?",
    options: ["Apollo 11", "Voyager", "Sputnik 1", "Explorer 1"],
    answer: "Sputnik 1"
  },
  {
    question: "Which war was fought between the North and South regions of the United States?",
    options: ["World War I", "American Civil War", "Revolutionary War", "Spanish-American War"],
    answer: "American Civil War"
  }
],
 entertainment: [
  {
    question: "Which movie features the quote, 'I'm gonna make him an offer he can't refuse'?",
    options: ["Scarface", "The Godfather", "Goodfellas", "Pulp Fiction"],
    answer: "The Godfather"
  },
  {
    question: "Which anime features a character named L fighting against Light Yagami?",
    options: ["Attack on Titan", "One Piece", "Death Note", "Naruto"],
    answer: "Death Note"
  },
  {
    question: "Who won the Grammy Award for Best New Artist in 2022?",
    options: ["Olivia Rodrigo", "Doja Cat", "BTS", "Billie Eilish"],
    answer: "Olivia Rodrigo"
  },
  {
    question: "Which web series is set in the fictional town of Hawkins, Indiana?",
    options: ["Riverdale", "The Umbrella Academy", "Dark", "Stranger Things"],
    answer: "Stranger Things"
  },
  {
    question: "Which K-pop group released the hit song 'Dynamite'?",
    options: ["BLACKPINK", "EXO", "BTS", "Twice"],
    answer: "BTS"
  },
  {
    question: "What is the name of the wizarding school in the Harry Potter series?",
    options: ["Beauxbatons", "Durmstrang", "Ilvermorny", "Hogwarts"],
    answer: "Hogwarts"
  },
  {
    question: "Which actor voiced the character of Woody in Toy Story?",
    options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "Robin Williams"],
    answer: "Tom Hanks"
  },
  {
    question: "In the anime 'Attack on Titan', what are the giant humanoid creatures called?",
    options: ["Demons", "Ghouls", "Titans", "Shinigami"],
    answer: "Titans"
  },
  {
    question: "Which movie directed by Christopher Nolan features a plot around dreams within dreams?",
    options: ["Tenet", "Interstellar", "Inception", "The Prestige"],
    answer: "Inception"
  },
  {
    question: "Who is the creator of the Marvel character Deadpool?",
    options: ["Stan Lee", "Rob Liefeld", "Steve Ditko", "Frank Miller"],
    answer: "Rob Liefeld"
  }
],


  geography: [
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctic", "Kalahari"],
    answer: "Antarctic"
  },
  {
    question: "Which country has the most islands?",
    options: ["Indonesia", "Philippines", "Canada", "Sweden"],
    answer: "Sweden"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Alps", "Rockies", "Himalayas"],
    answer: "Himalayas"
  },
  {
    question: "Which country is both an island and a continent?",
    options: ["Greenland", "Australia", "Iceland", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    answer: "Vatican City"
  },
  {
    question: "Which U.S. state has the most active volcanoes?",
    options: ["California", "Alaska", "Hawaii", "Washington"],
    answer: "Alaska"
  },
  {
    question: "Which ocean is the deepest in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  }
],

  sports: [
    {
      question: "How many players are there in a soccer team on the field?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Italy", "Argentina", "Brazil"],
      answer: "Brazil"
    },
    {
      question: "Which country has won the ICC T20 World Cup 2024?",
      options: ["India", "South Africa", "Australia", "England"],
      answer: "India"
     },
    {
      question: "Which country hosted the 2024 Summer Olympics?",
      options: ["Tokyo", "Paris", "Los Angeles", "London"],
      answer: "Paris"
    },
    {
      question: "In which year did India win its first Olympic gold medal in hockey?",
      options: ["1928", "1936", "1978", "1988"],
      answer: "1928"
    },
    {
      question: "Who won more Ballon d'Or awards?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Pele", "Diego Maradona"],
      answer: "Lionel Messi"
    },
    {
      question: "Who became the world champion in chess in 2024?",
      options: ["Ding Liren", "Gukesh Dommaraju", "Magnus Carlsen", "Arjun Erigaisi"],
      answer: "Gukesh Dommaraju"
    },
    {
      question: "Who won Javelin Throw Gold Medal in 2025 Doha Diamond League?",
      options: ["Arshad Nadeem", "Julian Weber", "Neeraj Chopra", "Anderson Peters"],
      answer: "Julian Weber"
    },
    {
      question: "Who was the first cricketer to score 10,000+ runs in test cricket?",
      options: ["Sachin Tendulkar", "Sunil Gavaskar", "Brian Lara", "Ricky Ponting"],
      answer: "Sunil Gavaskar"
    },
    {
      question: "Who holds the record for the most Grand Slam titles in men's tennis(as of 2024)?",
      options: ["Roger Federer", "Rafael Nadal", "Andy Murray", "Novak Djokovic"],
      answer: "Novak Djokovic"
    }
  ],
  geography: [
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctica", "Kalahari"],
    answer: "Antarctica"
  },
  {
    question: "Which country has the most islands?",
    options: ["Indonesia", "Philippines", "Canada", "Sweden"],
    answer: "Sweden"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Alps", "Rockies", "Himalayas"],
    answer: "Himalayas"
  },
  {
    question: "Which country is both an island and a continent?",
    options: ["Greenland", "Australia", "Iceland", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    answer: "Vatican City"
  },
  {
    question: "Which U.S. state has the most active volcanoes?",
    options: ["California", "Alaska", "Hawaii", "Washington"],
    answer: "Alaska"
  },
  {
    question: "Which ocean is the deepest in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  }
],

  random: [
    {
      question: "How many colors are there in a rainbow?",
      options: ["6", "7", "8", "9"],
      answer: "7"
    },
    {
      question: "Which language has the most native speakers?",
      options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
      answer: "Mandarin Chinese"
    },
    {
      question: "Which animal has 4 stomachs?",
      options: ["Cow", "Tiger", "Lion", "Cat"],
      answer: "Cow"
    },
    {
      question: "Where SUN Temple is situated?",
      options: ["Punjab", "Konarak", "Gujrat", "Kolkata"],
      answer: "Konarak"
    },
    {
      question: "Which Former Indian men Cricket captain has more trophy?",
      options: ["Mahendra Singh Dhoni", "Rohit Sharma", "Kapil Dev", "Saurav Ganguly"],
      answer: "Mahendra Singh Dhoni"
    },
    {
      question: "Who is the CEO of Google?",
      options: ["Elon Musk", "Donald Trump", "Sundararanjan Pichai", "Andy Jassy"],
      answer: "Sundararanjan Pichai"
    },
    {
      question: "Which city is called as City of Joy?",
      options: ["Mumbai", "Chennai", "Bangalore", "Kolkata"],
      answer: "Kolkata"
    },
    {
      question: "Which operation is declared by Indian Government for Pahalgam incident?",
      options: ["Operation War", "Operation Sindoor", "Operation keller", "Operation Shakti"],
      answer: "o"
    },
    {
      question: "When 5G network launched in India?",
      options: ["2022", "2021", "2023", "2019"],
      answer: "2022"
    },
    {
      question: "Full form of HTML?",
      options: ["Hyper Text Mark Languages", "Hyper Text Markup Language", "Hypo Text makeup Language", "None of these"],
      answer: "Hyper Text Markup Language"
    },
    {
  question: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  answer: "Paris"
},
{
  question: "Which planet is known as the Red Planet?",
  options: ["Earth", "Venus", "Mars", "Jupiter"],
  answer: "Mars"
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Jane Austen"],
  answer: "William Shakespeare"
},
{
  question: "What is the chemical symbol for water?",
  options: ["O2", "H2O", "CO2", "NaCl"],
  answer: "H2O"
},
{
  question: "In which year did the Titanic sink?",
  options: ["1905", "1912", "1920", "1898"],
  answer: "1912"
},
{
  question: "Who painted the Mona Lisa?",
  options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
  answer: "Leonardo da Vinci"
},
{
  question: "Which is the largest mammal in the world?",
  options: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
  answer: "Blue Whale"
},
{
  question: "How many continents are there on Earth?",
  options: ["5", "6", "7", "8"],
  answer: "7"
},
{
  question: "Which organ in the human body pumps blood?",
  options: ["Lungs", "Liver", "Brain", "Heart"],
  answer: "Heart"
},
{
  question: "What is the boiling point of water at sea level?",
  options: ["90°C", "95°C", "100°C", "105°C"],
  answer: "100°C"
},
{
  question: "Which country gifted the Statue of Liberty to the United States?",
  options: ["Germany", "France", "Italy", "Canada"],
  answer: "France"
},
{
  question: "Who invented the telephone?",
  options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
  answer: "Alexander Graham Bell"
},
{
  question: "Which element has the atomic number 1?",
  options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
  answer: "Hydrogen"
},
{
  question: "How many players are there in a soccer team on the field?",
  options: ["9", "10", "11", "12"],
  answer: "11"
},
{
  question: "What is the tallest mountain in the world?",
  options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
  answer: "Mount Everest"
},
{
  question: "Who discovered gravity after seeing an apple fall from a tree?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
  answer: "Isaac Newton"
},
{
  question: "Which language has the most native speakers in the world?",
  options: ["English", "Spanish", "Mandarin", "Hindi"],
  answer: "Mandarin"
},
{
  question: "What is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  answer: "2"
},
{
  question: "Which ocean is the largest?",
  options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  answer: "Pacific Ocean"
},
{
  question: "Who painted the ceiling of the Sistine Chapel?",
  options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Donatello"],
  answer: "Michelangelo"
},
{
  question: "What is the square root of 64?",
  options: ["6", "7", "8", "9"],
  answer: "8"
},
{
  question: "Which planet has the most moons?",
  options: ["Earth", "Mars", "Jupiter", "Saturn"],
  answer: "Saturn"
},
{
  question: "Which country won the FIFA World Cup in 2018?",
  options: ["Brazil", "Germany", "France", "Argentina"],
  answer: "France"
},
{
  question: "What does the 'www' in a website address stand for?",
  options: ["World Web Window", "World Wide Web", "Wide Web World", "Web World Wide"],
  answer: "World Wide Web"
},
{
  question: "How many sides does a hexagon have?",
  options: ["5", "6", "7", "8"],
  answer: "6"
},
{
  question: "Which continent is known as the 'Dark Continent'?",
  options: ["Asia", "Africa", "Australia", "South America"],
  answer: "Africa"
},
{
  question: "What is the capital city of Japan?",
  options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
  answer: "Tokyo"
},
{
  question: "In computing, what does CPU stand for?",
  options: ["Central Program Unit", "Central Processing Unit", "Computer Processing Unit", "Central Peripheral Unit"],
  answer: "Central Processing Unit"
},
{
  question: "Which instrument has keys, pedals, and strings?",
  options: ["Guitar", "Violin", "Piano", "Flute"],
  answer: "Piano"
},
{
  question: "Who is the author of the Harry Potter series?",
  options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
  answer: "J.K. Rowling"
},
{
  question: "Who was the first Prime Minister of India?",
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
  answer: "Jawaharlal Nehru"
},
{
  question: "Which is the national bird of India?",
  options: ["Sparrow", "Peacock", "Pigeon", "Eagle"],
  answer: "Peacock"
},
{
  question: "What is the capital of India?",
  options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
  answer: "New Delhi"
},
{
  question: "Which river is considered the holiest in India?",
  options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
  answer: "Ganga"
},
{
  question: "Who wrote the Indian national anthem?",
  options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subramania Bharati"],
  answer: "Rabindranath Tagore"
},
{
  question: "Which city is known as the 'Pink City' of India?",
  options: ["Jaipur", "Jodhpur", "Udaipur", "Agra"],
  answer: "Jaipur"
},
{
  question: "Which Indian cricketer is known as the 'Master Blaster'?",
  options: ["MS Dhoni", "Virat Kohli", "Kapil Dev", "Sachin Tendulkar"],
  answer: "Sachin Tendulkar"
},
{
  question: "In which year did India gain independence from British rule?",
  options: ["1942", "1945", "1947", "1950"],
  answer: "1947"
},
{
  question: "Which festival is known as the festival of lights?",
  options: ["Holi", "Diwali", "Navratri", "Eid"],
  answer: "Diwali"
},
{
  question: "Which is the highest civilian award in India?",
  options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
  answer: "Bharat Ratna"
},
{
  question: "What is the currency of India?",
  options: ["Taka", "Rupee", "Yuan", "Dinar"],
  answer: "Rupee"
},
{
  question: "Which monument is known as the symbol of love?",
  options: ["India Gate", "Qutub Minar", "Taj Mahal", "Charminar"],
  answer: "Taj Mahal"
},
{
  question: "Who was the first woman Prime Minister of India?",
  options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
  answer: "Indira Gandhi"
},
{
  question: "Which Indian state is known as the 'Spice Garden of India'?",
  options: ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
  answer: "Kerala"
},
{
  question: "What is the name of India's space agency?",
  options: ["NASA", "ISRO", "DRDO", "BARC"],
  answer: "ISRO"
},
{
  question: "Which Indian classical dance form originated in Tamil Nadu?",
  options: ["Kathak", "Kuchipudi", "Bharatanatyam", "Odissi"],
  answer: "Bharatanatyam"
},
{
  question: "Who is known as the 'Missile Man of India'?",
  options: ["Dr. Homi Bhabha", "Dr. Vikram Sarabhai", "Dr. A.P.J. Abdul Kalam", "Dr. Manmohan Singh"],
  answer: "Dr. A.P.J. Abdul Kalam"
},
{
  question: "Which Indian city is known as the Silicon Valley of India?",
  options: ["Hyderabad", "Mumbai", "Chennai", "Bengaluru"],
  answer: "Bengaluru"
},
{
  question: "What does the Ashoka Chakra in the Indian flag represent?",
  options: ["Freedom", "Truth", "Justice", "Dharma"],
  answer: "Dharma"
},
{
  question: "Which Indian festival involves flying kites?",
  options: ["Diwali", "Pongal", "Makar Sankranti", "Raksha Bandhan"],
  answer: "Makar Sankranti"
}]};

// Quiz logic with timer, answer review, and score
let currentCategory = null;
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 15;
// --- ADD BEFORE startQuiz ---

// Utility: Shuffle array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Show Random Rules Modal
function showRandomRulesModal(startCallback) {
  let modal = document.getElementById("random-rules-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "random-rules-modal";
    modal.innerHTML = `
      <div class="modal-content" style="max-width:350px;">
        <h2 style="color:#38bdf8;">Random Quiz Rules</h2>
        <ul style="text-align:left; font-size:1rem; color:#f4f6fa; margin-bottom:18px;">
          <li>20 questions will be randomly selected from a pool of 100.</li>
          <li>You have 180 seconds (3 minutes) to complete the quiz.</li>
          <li>You can use Previous, Next, and Skip buttons.</li>
          <li>You can submit anytime, or it will auto-submit after time is up.</li>
          <li>After submission, you will see your score and correct answers.</li>
        </ul>
        <div style="text-align:center;">
          <button id="random-proceed-yes" class="custom-login-btn" style="width:100px;">Yes</button>
          <button id="random-proceed-no" class="custom-login-btn" style="width:100px; background:#ef4444; color:#fff; margin-left:10px;">No</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = "flex";
  document.getElementById("random-proceed-yes").onclick = function() {
    modal.style.display = "none";
    startCallback();
  };
  document.getElementById("random-proceed-no").onclick = function() {
    modal.style.display = "none";
  };
}

// --- Random Quiz Logic ---
let randomSession = [], randomTimer = null, randomTimeLeft = 180;

function startRandomTimer() {
  randomTimeLeft = 180;
  updateRandomTimer();
  if (randomTimer) clearInterval(randomTimer);
  randomTimer = setInterval(() => {
    randomTimeLeft--;
    if (randomTimeLeft < 0) randomTimeLeft = 0;
    updateRandomTimer();
    if (randomTimeLeft <= 0) {
      clearInterval(randomTimer);
      randomTimer = null;
      submitRandomQuiz();
    }
  }, 1000);
}
function updateRandomTimer() {
  const timerSpan = document.getElementById("random-time-left");
  if (timerSpan) timerSpan.textContent = Math.max(0, randomTimeLeft);
}

function showRandomQuestion() {
  const main = document.querySelector("main");
  const questions = randomSession;
  const q = questions[currentIndex];
  main.innerHTML = `
    <div id="quiz-box">
      <div id="timer" style="font-size:1.1rem; color:#0ea5e9; margin-bottom:10px;">
        Time left: <span id="random-time-left">${randomTimeLeft}</span>s
      </div>
      <h2 id="quiz-question">${q.question}</h2>
      <div id="quiz-options"></div>
      <div style="margin:12px 0;">
        <button id="prev-btn" ${currentIndex === 0 ? "disabled" : ""}>Previous</button>
        <button id="skip-btn">Skip</button>
        <button id="next-btn" ${currentIndex === questions.length - 1 ? "disabled" : ""}>Next</button>
        <button id="submit-btn" style="background:#38bdf8; color:#181f2a; border-radius:7px; margin-left:8px;">Submit</button>
      </div>
      <p id="quiz-score">Question ${currentIndex + 1} of ${questions.length}</p>
    </div>
  `;
  const optionsDiv = document.getElementById("quiz-options");
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    // Highlight if previously selected
    if (userAnswers[currentIndex] === option) {
      btn.style.background = "#38bdf8";
      btn.style.color = "#fff";
    }
    btn.onclick = () => {
  userAnswers[currentIndex] = option;
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
};
    optionsDiv.appendChild(btn);
  });
  document.getElementById("prev-btn").onclick = () => { if (currentIndex > 0) { currentIndex--; showRandomQuestion(); } };
  document.getElementById("next-btn").onclick = () => { if (currentIndex < questions.length - 1) { currentIndex++; showRandomQuestion(); } };
  document.getElementById("skip-btn").onclick = () => { userAnswers[currentIndex] = undefined; if (currentIndex < questions.length - 1) { currentIndex++; showRandomQuestion(); } };
  document.getElementById("submit-btn").onclick = () => { submitRandomQuiz(); };
}

function submitRandomQuiz() {
  if (randomTimer) { clearInterval(randomTimer); randomTimer = null; }
  showRandomScore();
}

function showRandomScore() {
  const questions = randomSession;
  let correct = userAnswers.filter((ans, i) => ans === questions[i].answer).length;
  let resultHtml = `
    <h2>Your Score: ${correct}/${questions.length}</h2>
    <div id="result-details" style="text-align:left; margin: 0 auto; max-width: 500px;">
      <h3 style="color:#38bdf8;">Review Answers:</h3>
      <ol style="padding-left: 1.2em;">
  `;
  questions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = userAns === q.answer;
    resultHtml += `
      <li style="margin-bottom:12px;">
        <div style="font-weight:600;">${q.question}</div>
        <div>Your answer: <span style="color:${isCorrect ? '#22c55e' : '#ef4444'}">${userAns ? userAns : 'No answer'}</span></div>
        <div>Correct answer: <span style="color:#22c55e">${q.answer}</span></div>
      </li>
    `;
  });
  resultHtml += `
      </ol>
    </div>
    <button onclick="window.location.reload()" style="margin-top:18px; padding: 10px 28px; font-size: 1rem; background: #38bdf8; color: #1e293b; border: none; border-radius: 6px; cursor: pointer;">Restart</button>
  `;
  document.querySelector("main").innerHTML = resultHtml;
}
function startQuiz(category) {
  currentCategory = category;
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  if (category === "random") {
    showRandomRulesModal(() => {
      let pool = questionsByCategory.random.slice();
      shuffleArray(pool);
      randomSession = pool.slice(0, 20);
      showRandomQuestion();
      startRandomTimer();
    });
  } else {
    showQuestion();
  }
}

function showQuestion() {
  const main = document.querySelector("main");
  const questionData = questionsByCategory[currentCategory][currentIndex];
  timeLeft = 15;

  main.innerHTML = `
    <div id="quiz-box">
      <div id="timer" style="font-size:1.1rem; color:#0ea5e9; margin-bottom:10px;">Time left: <span id="time-left">${timeLeft}</span>s</div>
      <h2 id="quiz-question">${questionData.question}</h2>
      <div id="quiz-options"></div>
    
${currentIndex === questionsByCategory[currentCategory].length - 1
  ? `<button id="next-btn">Finish</button>`
  : `<button id="next-btn">Next</button>`
}
<p id="quiz-score">Question ${currentIndex + 1} of ${questionsByCategory[currentCategory].length}</p>
    </div>
  `;

  const optionsDiv = document.getElementById("quiz-options");
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    
    if (userAnswers[currentIndex] === option) {
      btn.style.background = "#38bdf8";
      btn.style.color = "#fff";
    }
    btn.addEventListener("click", () => {
  userAnswers[currentIndex] = option;
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
});
    optionsDiv.appendChild(btn);
  });

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) timeLeft = 0;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
   
      document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      document.querySelectorAll(".option-btn").forEach(b => {
        if (b.textContent === questionData.answer) {
          b.style.background = "#22c55e";
          b.style.color = "#fff";
        }
      });
      document.getElementById("next-btn").disabled = false;
    }
  }, 1000);


  document.getElementById("next-btn").addEventListener("click", () => {
    clearInterval(timerInterval);
    currentIndex++;
    if (currentIndex < questionsByCategory[currentCategory].length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  document.getElementById("prev-btn").addEventListener("click", () => {
    clearInterval(timerInterval);
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
    }
  });
}
function showScore() {
  const main = document.querySelector("main");
  // Calculate score based on userAnswers
  score = 0;
  questionsByCategory[currentCategory].forEach((q, idx) => {
    if (userAnswers[idx] === q.answer) score++;
  });

  let resultHtml = `
    <h2>Your Score: ${score}/${questionsByCategory[currentCategory].length}</h2>
    <div id="result-details" style="text-align:left; margin: 0 auto; max-width: 500px;">
      <h3 style="color:#38bdf8;">Review Answers:</h3>
      <ol style="padding-left: 1.2em;">
  `;
  questionsByCategory[currentCategory].forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = userAns === q.answer;
    resultHtml += `
      <li style="margin-bottom:12px;">
        <div style="font-weight:600;">${q.question}</div>
        <div>Your answer: <span style="color:${isCorrect ? '#22c55e' : '#ef4444'}">${userAns ? userAns : 'No answer'}</span></div>
        <div>Correct answer: <span style="color:#22c55e">${q.answer}</span></div>
      </li>
    `;
  });
  resultHtml += `
      </ol>
    </div>
    <button onclick="window.location.reload()" style="margin-top:18px; padding: 10px 28px; font-size: 1rem; background: #38bdf8; color: #1e293b; border: none; border-radius: 6px; cursor: pointer;">Restart</button>
  `;
  main.innerHTML = resultHtml;
}

// Handle Home link click to reset main content
document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.querySelector('nav ul li a[href="#"]');
  if (homeLink) {
    homeLink.addEventListener("click", function(e) {
      e.preventDefault();
      const main = document.querySelector("main");
      
  main.innerHTML = `
  <h1>Welcome to AptitudeArena</h1>
  <button id="start-quiz-btn" style="margin: 24px 0 18px 0; padding: 12px 32px; font-size: 1.1rem; background: #38bdf8; color: #1e293b; border: none; border-radius: 6px; cursor: pointer;">Start Quiz</button>
`;
      // Add category modal
      const startBtn = document.getElementById("start-quiz-btn");
      const catModal = document.getElementById("category-modal");
      if (startBtn && catModal) {
        startBtn.addEventListener("click", function() {
          catModal.style.display = "flex";
        });
      }
    });
  }
});

// Close category modal if click outside modal-content
document.addEventListener("DOMContentLoaded", function() {
  const catModal = document.getElementById("category-modal");
  if (catModal) {
    catModal.addEventListener("click", function(e) {
      if (e.target === catModal) {
        catModal.style.display = "none";
      }
    });
  }
});

// Close login modal if click outside modal-content
document.addEventListener("DOMContentLoaded", function() {
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    loginModal.addEventListener("click", function(e) {
      if (e.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  }
});

// Show footer only after scrolling down 200px
window.addEventListener("scroll", function() {
  const footer = document.getElementById("contact-footer");
  if (!footer) return;
  if (window.scrollY > 200) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});
// Show footer only after scrolling down 200px
window.addEventListener("scroll", function() {
  const footer = document.getElementById("contact-footer");
  if (!footer) return;
  if (window.scrollY > 20) { 
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.getElementById("user-icon-link");
  const loginModal = document.getElementById("login-modal");
  if (userIcon && loginModal) {
    userIcon.addEventListener("click", function(e) {
      e.preventDefault();
      loginModal.style.display = "flex";
    });
  }
});
// Responsive hamburger menu
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("header nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function() {
      nav.classList.toggle("open");
    });
    // Close nav when clicking outside
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const fbForm = document.getElementById("feedback-form");
  const fbSuccess = document.getElementById("fb-success");
  if (fbForm) {
    fbForm.addEventListener("submit", function(e) {
      e.preventDefault();
      fbForm.reset();
      if (fbSuccess) {
        fbSuccess.style.display = "block";
        setTimeout(() => { fbSuccess.style.display = "none"; }, 3500);
      }
    });
  }
});