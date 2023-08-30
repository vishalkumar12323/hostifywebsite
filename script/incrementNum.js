setTimeout(() => {
    const priceSection = document.querySelector('.price-section');
    const counter = document.querySelectorAll('.counter');
    const priceSectionObserver = new IntersectionObserver((enteries, Observer) => {
        const ent = enteries[0];
        // console.log(ent);
        // console.log(observer);

        if (!ent.isintersecting) return counter.forEach((counter) => {
            counter.innerHTML = '0';

            const updateCounterNumber = () => {
                const targetCounter = +counter.getAttribute('data-target');
                // console.log(targetCounter);
                const startingCounterNumber = Number(counter.innerHTML);
                // console.log(startingCounterNumber);

                const increment = targetCounter / 20;

                if (startingCounterNumber < targetCounter) {
                    counter.innerHTML = `${Math.round((startingCounterNumber + increment))}`;
                    setTimeout(updateCounterNumber, 30);
                }
                else {
                    counter.innerHTML = targetCounter;
                }
            }
            updateCounterNumber();
        });

        Observer.unobserve(priceSection);
    }, {
        root: null,
        threshold: 0
    });
    priceSectionObserver.observe(priceSection);

}, 3000);



