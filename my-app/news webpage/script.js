const newsSection = document.getElementById('news');

// Sample news data (you can replace this with real data from an API)
const newsData = [
  {
    title: 'Breaking News 1',
    content: 'LGBTQ community and women’s organisations have called a press conference to pronounce their stand on Uniform Civil Code.',
  },
  {
    title: 'Breaking News 2',
    content: 'Fisheries College head G. Manja Naik to inaugurate training workshop on fish processing and value-added marine products, Fisheries College.',
  },
  {
    title:'Breaking News 3',
    content:'Infosys makes ₹5945 crore net profit in Q1FY24, 11% higher than last year',
  },
  {
    title:'Breaking News 3',
    content:'Sensex closes at fresh high of 67,572, Nifty at record 19,979',
  },
  {
    title:'Breaking News 3',
    content:'With digital acceleration, customer experience is becoming an issue: Firstsource',
  },
  {
    title:'Breaking News 3',
    content:'Reliance-Jio Financial demerger defies all bets, JFSL valued at ₹261.85/share',
  },
  {
    title:'Breaking News 3',
    content:'Dominos ₹49 pizza in India is the worlds cheapest. It costs ₹985 in US',
  },
  {
    title:'Breaking News 3',
    content:'ITR filing: Penalty and other consequences if returns submitted after due date',
  },
  // Add more news articles here
];

// Function to create and display news articles
function displayNews() {
  newsData.forEach((article) => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.content}</p>
    `;
    newsSection.appendChild(articleElement);
  });
}

// Call the function to display the news articles on page load
displayNews();
