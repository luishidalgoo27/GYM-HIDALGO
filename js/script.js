function changePlan(planType) {
    const monthlyPrices = {
        initial: '$15/mes',
        premium: '$25/mes',
        elite: '$30/mes',
        
    };

    const yearlyPrices = {
        initial: '$150/año',
        premium: '$250/año',
        elite: '$300/año',
        
    };

    const priceElements = {
        initial: document.getElementById('initial-price'),
        premium: document.getElementById('premium-price'),
        elite: document.getElementById('elite-price')
    };

    const detailElements = {
        initial: document.getElementById('initial-plan-details'),
        premium: document.getElementById('premium-plan-details'),
        elite: document.getElementById('elite-plan-details')
    };

    if (planType === 'yearly') {
        priceElements.initial.innerHTML = yearlyPrices.initial;
        priceElements.premium.innerHTML = yearlyPrices.premium;
        priceElements.elite.innerHTML = yearlyPrices.elite;

    } else {
        priceElements.initial.innerHTML = monthlyPrices.initial;
        priceElements.premium.innerHTML = monthlyPrices.premium;
        priceElements.elite.innerHTML = monthlyPrices.elite;

    }

    document.getElementById('monthly-btn').classList.toggle('active', planType === 'monthly');
    document.getElementById('yearly-btn').classList.toggle('active', planType === 'yearly');
}

