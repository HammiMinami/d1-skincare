export const renderSet2 = () => {
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22">
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(1 1.00074)" d="M0 9.7355375C0 4.3579912 4.2525558 0 9.5 0C14.747444 0 19 4.3579912 19 9.7355375C19 15.113083 14.747444 19.471075 9.5 19.471075C4.2525558 19.471075 0 15.113083 0 9.7355375Z" fill-rule="evenodd"/>
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(6 1.00074)" d="M17 0L4.7473617 12.297521L0 7.5354562" fill-rule="evenodd"/>
</svg>`;

  return `
<section class="set2 cta-section">
    <div class="grid-container">
        <div class="row align-middle grid-x grid-margin-x">
            <div class="small-12 medium-6 columns">
                <span class="pill-label">Start your 1 minute routine</span>
                <h2 class="cta-title">Get The Set</h2>
                <p class="cta-description">
                    Experience the ultimate simplicity and effectiveness with our complete skincare set. Designed for men who want great skin without the hassle.
                </p>

                <ul class="benefit-list">
                    <li class="benefit-item">${checkIcon}  $10 Off Each Pouch</li>
                    <li class="benefit-item">${checkIcon}  Never Run Out</li>
                    <li class="benefit-item">${checkIcon}  No Commitment. Cancel Anytime</li>
                    <li class="benefit-item">${checkIcon}  Pause, Delay, or Change Frequency</li>
                </ul>

                <button class="add-to-cart-btn" data-cart-id="d1-set" data-cart-name="D1 Skincare Set" data-cart-price="58.99">
                    <span>Add to Cart</span>
                    <span class="price-tag">$58.99
                    </span>
                </button>
            </div>

            <div class="small-12 medium-6 columns product-montage">
                <img src="src/assets/images/product-set.png" alt="Complete D1 Skincare Set" class="montage-img">
            </div>
        </div>
    </div>
</section>
  `;
};
