
let selectedOffer = null;

export function selectOffer(offerId) {
    document.querySelectorAll('.offer-block').forEach(block => {
        block.classList.remove('selected');
    });

    
    const selectedBlock = document.getElementById(offerId);
    selectedBlock.classList.add('selected');

    
    selectedOffer = offerId;
}

export function continueToLink() {
    if (selectedOffer === 'yearly') {
        window.location.href = 'https://apple.com/';
    } else if (selectedOffer === 'weekly') {
        window.location.href = 'https://google.com/';
    }
}
