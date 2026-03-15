export const renderResults = () => {
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22">
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(1 1.00074)" d="M0 9.7355375C0 4.3579912 4.2525558 0 9.5 0C14.747444 0 19 4.3579912 19 9.7355375C19 15.113083 14.747444 19.471075 9.5 19.471075C4.2525558 19.471075 0 15.113083 0 9.7355375Z" fill-rule="evenodd"/>
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(6 1.00074)" d="M17 0L4.7473617 12.297521L0 7.5354562" fill-rule="evenodd"/>
</svg>`;

  return `
<section class="results">
    <h2>Results You Can See</h2>
    <p>A simple skincare routine is essential to reduce and prevent fine lines, wrinkles, dry skin, and dark splotches that start to appear on your face as you age.</p>
    <p>If you don't feel better and see results in 30 days, you can keep the product and we'll send you a full refund.</p>
</section>

<div class="hero-banner">
    <img src="src/assets/images/one-minute-routine.png" alt="D1 Skincare Results" class="hero-image">
    
    <div class="quote-overlay">
        <h3>"The one minute routine that will save your face"</h3>
    </div>
</div>

<div class="trust-bar">
    <div class="main-ticker" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": 1500, "prevNextButtons": false, "pageDots": false }'>
         <div class="ticker-cell trust-item">
                ${checkIcon}
                All-natural ingredients
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                Formulated by Doctors & PHDS
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                100% Risk-free returns
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                No prescription required
            </div>
                <div class="ticker-cell trust-item">
                ${checkIcon}
                All-natural ingredients
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                Formulated by Doctors & PHDS
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                100% Risk-free returns
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                No prescription required
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                All-natural ingredients
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                Formulated by Doctors & PHDS
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                100% Risk-free returns
            </div>
            <div class="ticker-cell trust-item">
                ${checkIcon}
                No prescription required
            </div>
    </div>
</div>
  `;
};
