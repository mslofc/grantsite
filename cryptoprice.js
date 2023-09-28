// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '18063ea3d8c3768f6f973bf220dc3339252d30b0b23eb17ce624fd589ecde234';

// Define an array of cryptocurrency symbols you want to get prices for
const cryptocurrencySymbols = ['BTC', 'ETH', 'LTC', 'XRP','ADA']; // Add more symbols as needed

// Create an object to store the fetched prices
const cryptocurrencyPrices = {};

// Function to fetch cryptocurrency prices
const fetchCryptocurrencyPrices = () => {
  // Create an array of fetch promises for each cryptocurrency
  const fetchPromises = cryptocurrencySymbols.map(symbol => {
    // Construct the API URL for each cryptocurrency
    const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${apiKey}`;

    // Make the GET request for the cryptocurrency
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        cryptocurrencyPrices[symbol] = data.USD; // Store the price in the object
      });
  });

  // Wait for all fetch requests to complete
  return Promise.all(fetchPromises);
};

// Function to update the webpage with cryptocurrency prices
const updatePageWithCryptocurrencyPrices = () => {
  // Loop through the cryptocurrency symbols and update the page
  cryptocurrencySymbols.forEach(symbol => {
    const price = cryptocurrencyPrices[symbol];
    const element = document.getElementById(`${symbol.toLowerCase()}-price`); // Replace with your HTML element IDs
    if (element) {
      element.textContent = `$${price}`;
    }
  });
};

// Fetch cryptocurrency prices and update the page
fetchCryptocurrencyPrices()
  .then(() => {
    // Update the page with the fetched prices
    updatePageWithCryptocurrencyPrices();
  })
  .catch(error => {
    console.error('Error fetching cryptocurrency prices:', error);
  });
