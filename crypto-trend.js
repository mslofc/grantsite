// Define a function to update cryptocurrency data for a given card
function updateCryptoCard(cardId, coinSymbol) {
    // Replace 'YOUR_API_KEY' with your actual CryptoCompare API key
    const apiKey = '18063ea3d8c3768f6f973bf220dc3339252d30b0b23eb17ce624fd589ecde234';
    const fiatCurrency = 'USD';

    // Fetch cryptocurrency data from the CryptoCompare API
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinSymbol}&tsyms=${fiatCurrency}&api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const card = document.getElementById(cardId);

            // Extract relevant data
            const price = data.RAW[coinSymbol][fiatCurrency].PRICE.toFixed(2);
            const change = data.RAW[coinSymbol][fiatCurrency].CHANGEPCT24HOUR.toFixed(2);

            // Update the trend card elements
            card.querySelector('.card-value').textContent = `USD ${price}`;
            card.querySelector('.current-price').textContent = price;
            const badge = card.querySelector('.badge');
            badge.textContent = `${change}%`;

            // Set badge color based on positive/negative change
            if (change > 0) {
                badge.classList.remove('red');
                badge.classList.add('green');
            } else if (change < 0) {
                badge.classList.remove('green');
                badge.classList.add('red');
            }
        })
        .catch((error) => {
            console.error('Error fetching cryptocurrency data:', error);
        });
}

// Call the updateCryptoCard function for each card
updateCryptoCard('btc-card', 'BTC');
updateCryptoCard('eth-card', 'ETH');
updateCryptoCard('usdt-card', 'USDT');
updateCryptoCard('bnb-card', 'BNB');
