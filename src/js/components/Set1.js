export const renderSet1 = () => {
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22">
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(1 1.00074)" d="M0 9.7355375C0 4.3579912 4.2525558 0 9.5 0C14.747444 0 19 4.3579912 19 9.7355375C19 15.113083 14.747444 19.471075 9.5 19.471075C4.2525558 19.471075 0 15.113083 0 9.7355375Z" fill-rule="evenodd"/>
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(6 1.00074)" d="M17 0L4.7473617 12.297521L0 7.5354562" fill-rule="evenodd"/>
</svg>`;

  return `
    <section class="set" id="set1">
<div class="grid-container">
    <div class="grid-x grid-margin-x">
        
        <div class="small-12 medium-6 columns">
            <span class="cta-badge">Start your 1 minute routine</span>
            <h2 class="cta-headline">Get the set</h2>
            <p class="cta-body">
                Experience the ultimate simplicity and effectiveness with our complete skincare set. Designed for men who want great skin without the hassle, our set includes everything you need for a daily routine that takes just one minute.
            </p>

            <ul class="cta-features">
                <li>${checkIcon} $10 Off Each Pouch</li>
                <li>${checkIcon} Never Run Out</li>
                <li>${checkIcon} No Commitment. Cancel Anytime</li>
                <li>${checkIcon} Pause, Delay, or Change Frequency</li>
            </ul>

            <a href="#" class="add-to-cart-btn" data-cart-id="d1-set" data-cart-name="D1 Skincare Set" data-cart-price="58.99">
                Add to Cart — $58.99 <span class="price-old">$70.99</span>
            </a>
        </div>

        <div class="small-12 medium-6 columns product-stack">
            <img src="src/assets/images/product-set.png" alt="D1 Skincare Set">
        </div>

    </div>
</div>
    </section>
  `;
};
