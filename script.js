const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "Don’t let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        author: "Unknown"
    },
    {
        text: "It’s not whether you get knocked down, it’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
        text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {
        text: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen"
    },
    {
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    {
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou"
    },
    {
        text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        author: "Johann Wolfgang Von Goethe"
    },
    {
        text: "We generate fears while we sit. We overcome them by action.",
        author: "Dr. Henry Link"
    },
    {
        text: "Whether you think you can or think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        text: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        text: "The man who has confidence in himself gains the confidence of others.",
        author: "Hasidic Proverb"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Creativity is intelligence having fun.",
        author: "Albert Einstein"
    },
    {
        text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        author: "Don Zimmer"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "Do what you can with all you have, wherever you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "To see what is right and not do it is a lack of courage.",
        author: "Confucius"
    },
    {
        text: "Reading is to the mind, as exercise is to the body.",
        author: "Brian Tracy"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Unknown"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown"
    },
    {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn"
    },
    {
        text: "With self-discipline most anything is possible.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Dreams don't work unless you do.",
        author: "John C. Maxwell"
    },
    {
        text: "Self-belief and hard work will always earn you success.",
        author: "Virat Kohli"
    },
    {
        text: "The key to success is action, and the essential in action is perseverance.",
        author: "Sun Yat-sen"
    },
    {
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "Unknown"
    },
    {
        text: "Work hard in silence, let your success be your noise.",
        author: "Frank Ocean"
    },
    {
        text: "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
        author: "Vince Lombardi"
    },
    {
        text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
        author: "Pele"
    },
    {
        text: "There are no shortcuts to any place worth going.",
        author: "Beverly Sills"
    },
    {
        text: "Discipline is doing what needs to be done, even if you don't want to do it.",
        author: "Unknown"
    },
    {
        text: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Rohn"
    },
    {
        text: "Good things come to those who work their asses off and never give up.",
        author: "Unknown"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Don't wish it were easier. Wish you were better.",
        author: "Jim Rohn"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "The difference between try and triumph is just a little umph!",
        author: "Marvin Phillips"
    },
    {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "Success is not just about making money. It's about making a difference.",
        author: "Unknown"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        text: "Success is not just about making money. It's about making a difference.",
        author: "Unknown"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
        author: "Ray Goforth"
    },
    {
        text: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author: "Jim Rohn"
    },
    {
        text: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
    },
    {
        text: "Never give in except to convictions of honor and good sense.",
        author: "Winston Churchill"
    },
    {
        text: "Stop chasing the money and start chasing the passion.",
        author: "Tony Hsieh"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        author: "G. K. Chesterton"
    },
    {
        text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.",
        author: "Pele"
    },

    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },

    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },

    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },


    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },

    {
        text: "Your education is a dress rehearsal for a life that is yours to lead.",
        author: "Nora Ephron"
    },

    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },

    {
        text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill"
    },

    {
        text: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        author: "Confucius"
    },

    {
        text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss"
    },

    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },

    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },

    {
        text: "The beautiful thing about learning is that no one can take it away from you.",
        author: "B.B. King"
    },

    {
        text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi"
    },

    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },

    {
        text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats"
    },

    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },

    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },

    {
        text: "Set your goals high, and don't stop till you get there.",
        author: "Bo Jackson"
    },

    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },

    {
        text: "It's not about how bad you want it. It's about how hard you're willing to work for it.",
        author: "Unknown"
    },

    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },

    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },

    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },

    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },

    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },

    {
        text: "Your education is a dress rehearsal for a life that is yours to lead.",
        author: "Nora Ephron"
    },

    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },

    {
        text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill"
    },

    {
        text: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        author: "Confucius"
    },

    {
        text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss"
    },

    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },

    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },

    {
        text: "The beautiful thing about learning is that no one can take it away from you.",
        author: "B.B. King"
    },
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = randomQuote.text;
    document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-button").addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();

// Function to read the quote aloud
function readAloud() {
    const quoteText = document.getElementById("quote-text").textContent;
    const utterance = new SpeechSynthesisUtterance(quoteText);
    speechSynthesis.speak(utterance);
}

// Function to copy the quote text to the clipboard
function copyText() {
    const quoteText = document.getElementById("quote-text").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Text copied to clipboard!");
}

// Function to share the quote on Twitter
function shareOnTwitter() {
    const quoteText = document.getElementById("quote-text").textContent;
    const quoteAuthor = document.getElementById("quote-author").textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + "\n " + quoteAuthor)}`;
    window.open(twitterURL, "_blank");
}

// Event listeners for the new buttons
document.getElementById("read-button").addEventListener("click", readAloud);
document.getElementById("copy-button").addEventListener("click", copyText);
document.getElementById("share-button").addEventListener("click", shareOnTwitter);