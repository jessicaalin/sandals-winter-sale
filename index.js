const resorts = document.querySelector('#resorts');


// Data for each card
const cards = [
    {
        srcset: 'assets/sandals-ochi-opt.webp',
        media: '(min-width: 768px)',
        mobileSrc: 'assets/sandals-ochi-mobile-opt.webp',
        alt: 'Beach resort in Jamaica',
        width: '375.5',
        height: '200',
        loading: 'lazy',
        title: 'Sandals Ochi',
        subtitle: 'Ocho Rios - Jamaica',
        text: 'An 110 acre exclusive tropical beachfront hideaway, enjoy a total of 16 restaurants, 11 unique bars, including the Caribbean\'s first speakeasy, and unlimited golf at nearby Upton Estate Golf & Country Club. <span>View resort</span>',
        dates: 'Jan 1 - Jan 11, 2023 <div class="line"></div> Jan 14 - May 3, 2023',
        pricePrevious: '$296',
        priceCurrent: '$246'
    },
    {
        srcset: 'assets/sandals-royal-barbados-opt.webp',
        media: '(min-width: 768px)',
        mobileSrc: 'assets/sandals-royal-barbados-mobile-opt.webp',
        alt: 'Beach resort in Barbados',
        width: '375.5',
        height: '200',
        loading: 'lazy',
        title: 'Sandals Royal Barbados',
        subtitle: 'St. Lawrence Gap - Barbados',
        text: 'The all-new, all-suite beach resort in the spirited St. Lawrence Gap area. Enjoy the Caribbean\'s first rooftop pool and bar, a bowling alley, a 15,000-square-foot spa, even Rolls-Royce transfers for top-tier guests. <span>View resort</span>',
        dates: 'Jan 27 - Apr 24, 2023',
        pricePrevious: '$473',
        priceCurrent: '$449'
    },
];


function createCard(data) {
    // Create card div
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    // Create picture element
    const pictureElement = document.createElement('picture');
    cardDiv.appendChild(pictureElement);

    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('srcset', data.srcset);
    sourceElement.setAttribute('media', data.media);

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.mobileSrc);
    imgElement.setAttribute('alt', data.alt);
    imgElement.setAttribute('width', data.width);
    imgElement.setAttribute('height', data.height);
    imgElement.setAttribute('loading', data.loading);

    pictureElement.appendChild(sourceElement);
    pictureElement.appendChild(imgElement);

    // Create text container
    const textDiv = document.createElement('div');
    textDiv.classList = 'text-content';
    cardDiv.appendChild(textDiv);

    // Create heading
    const headingEl = document.createElement('h3');
    headingEl.textContent = data.title;
    textDiv.appendChild(headingEl);

    // Create title line
    const titleLineEl = document.createElement('div');
    titleLineEl.className = 'title-line';
    textDiv.appendChild(titleLineEl);

    // Create subtitle
    const subtitleEl = document.createElement('p');
    subtitleEl.className = 'text-subtitle';
    subtitleEl.textContent = data.subtitle;
    textDiv.appendChild(subtitleEl);

    // Create main text
    const textCopyEl = document.createElement('p');
    textCopyEl.className = 'text-copy';
    textCopyEl.innerHTML = data.text;
    textDiv.appendChild(textCopyEl);

    // Create highlight text
    const highlightEl = document.createElement('p');
    highlightEl.className = 'text-highlight';
    highlightEl.textContent = 'Book a stay between:';
    textDiv.appendChild(highlightEl);

    // Create dates
    const datesEl = document.createElement('div');
    datesEl.className = 'dates';
    datesEl.innerHTML = `<p>${data.dates}</p>`;
    textDiv.appendChild(datesEl);

    // Create prices
    const pricesEl = document.createElement('div');
    pricesEl.className = 'prices';
    pricesEl.innerHTML = `
        <p class="text-price-previous">
            Was from: <span>'${data.pricePrevious}</span> pp/pn
        </p>
        <div class="line"></div>
        <p class="text-price-current">
            Now from: <span>${data.priceCurrent}</span> <span>pp/pn</span>
        </p>`;
    textDiv.appendChild(pricesEl);

    // Create buttons container
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    textDiv.appendChild(buttonsDiv);

    // Create offer button
    const offerButton = document.createElement('a');
    offerButton.className = 'button-offer';
    offerButton.href = '#';
    offerButton.textContent = 'View offer details';
    const chevronIcon = document.createElement('img');
    chevronIcon.src = 'assets/icon-drop-down-arrow.webp';
    chevronIcon.alt = 'Right-facing chevron';
    chevronIcon.width = '9.09';
    chevronIcon.height = '4.54';
    chevronIcon.loading = 'lazy';
    offerButton.appendChild(chevronIcon);
    buttonsDiv.appendChild(offerButton);
    
    // Create rooms button
    const roomsButton = document.createElement('a');
    roomsButton.className = 'button-rooms';
    roomsButton.href = '#';
    roomsButton.textContent = 'View rooms';
    buttonsDiv.appendChild(roomsButton);

    // Append card div to resorts
    resorts.appendChild(cardDiv)
}

// Create cards with cards array
cards.forEach(createCard);

