(function() {
  const params = new URLSearchParams(window.location.search);
  const funnel = params.get('funnel');
  const leadOffer = params.get('lead_introductory_offer');
  console.log('Funnel:', funnel);
  console.log('Lead Offer:', leadOffer);

  if (funnel === '75off' && leadOffer === '75off') {
    // maybe show a special badge or modal
    alert('Welcome! You have the 75% off special offer!');
  }
})();
