// Function to fetch cryptocurrency data
async function fetchCryptocurrencyData() {
    const apiKey = '18063ea3d8c3768f6f973bf220dc3339252d30b0b23eb17ce624fd589ecde234'; // Replace with your Cryptocompare API key
    const endpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,ADA&tsyms=USD&api_key=${apiKey}`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        // Extract cryptocurrency data from the response
        const cryptocurrencies = {
            BTC: data.RAW.BTC.USD,
            ETH: data.RAW.ETH.USD,
            XRP: data.RAW.XRP.USD,
            LTC: data.RAW.LTC.USD,
            ADA: data.RAW.ADA.USD,
            
        };

        // Update the HTML table with live data
        for (const symbol in cryptocurrencies) {
            if (cryptocurrencies.hasOwnProperty(symbol)) {
                const crypto = cryptocurrencies[symbol];
                const row = document.querySelector(`#crypto-${symbol}`);

                if (row) {
                    // Update price
                    row.querySelector('.crypto-price').textContent = `$${crypto.PRICE.toFixed(2)}`;

                    // Update 24h change
                    const changeElement = row.querySelector('.crypto-change');
                    const change = crypto.CHANGEPCT24HOUR.toFixed(2);
                    changeElement.textContent = `${change}%`;

                    // Add a class for styling positive or negative change
                    if (change > 0) {
                        changeElement.classList.add('green');
                        changeElement.classList.remove('red');
                    } else if (change < 0) {
                        changeElement.classList.add('red');
                        changeElement.classList.remove('green');
                    } else {
                        changeElement.classList.remove('green', 'red');
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
}

// Fetch cryptocurrency data and update it every 10 seconds (adjust as needed)
fetchCryptocurrencyData();
setInterval(fetchCryptocurrencyData, 10000);
