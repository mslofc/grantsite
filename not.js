const countries = ['USA', 'UK', 'Germany', 'France', 'Italy'];
const actions = ['invested', 'withdrawn', 'is trading with'];
const amounts = ['$1000', '$500', '$2000', '$800'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateNotification() {
    const country = getRandomItem(countries);
    const action = getRandomItem(actions);
    const amount = getRandomItem(amounts);

    const notification = document.querySelector('.notification');
    const countrySpan = notification.querySelector('.country');
    const actionSpan = notification.querySelector('.action');
    const amountSpan = notification.querySelector('.amount');

    countrySpan.textContent = country;
    actionSpan.textContent = action;
    amountSpan.textContent = amount;

    // Slide in the notification
    const notificationContainer = document.querySelector('.notification-container');
    notificationContainer.style.right = '0';

    // Slide out after 5 seconds
    setTimeout(() => {
        notificationContainer.style.right = '-300px';
    }, 5000);
}

// Generate the first notification immediately
generateNotification();

// Generate new notifications every 10 seconds
setInterval(generateNotification, 10000);
