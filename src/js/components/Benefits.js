export const renderBenefits = () => {
  return `
    <section class="benefits">
<div class="grid-container">
    <div class="row align-center">
        <div class="small-12 columns section-header">
            <p class="pre-title">Heres how D1 works</p>
            <div class="stopwatch-wrapper flex-container flex-dir-row align-center">
              <img src="src/assets/images/clock.svg" />
            </div>
            <h2 class="main-title">JUST 1 MINUTE A DAY</h2>
        </div>
    </div>

    <div class="row small-up-1 medium-up-3">
        
        <div class="column step-container small-12 medium-12 large-4">
            <div class="image-wrapper">
                <div class="step-badge">1</div>
                <img src="src/assets/images/step-1.png" alt="Step 1">
            </div>
            <div class="step-content">
                <img src="src/assets/images/charcoal-face-wash.png" class="product-thumbnail" alt="Cleanser">
                <p class="step-description">Wash your face with our Bamboo Charcoal Cleanser</p>
            </div>
        </div>

        <div class="column step-container small-12 medium-12 large-4">
            <div class="image-wrapper">
                <div class="step-badge">2</div>
                <img src="src/assets/images/step-2.png" alt="Step 2">
            </div>
            <div class="step-content">
                <img src="src/assets/images/moisturizer-cream.png" class="product-thumbnail" alt="Moisturizer">
                <p class="step-description">Apply a dime size amount of All Day Moisturizer evenly to your face</p>
            </div>
        </div>

        <div class="column step-container small-12 medium-12 large-4">
            <div class="image-wrapper">
                <div class="step-badge">3</div>
                <img src="src/assets/images/step-3.png" alt="Step 3">
            </div>
            <div class="step-content">
                <img src="src/assets/images/eye-cream.png" class="product-thumbnail" alt="Eye Cream">
                <p class="step-description">Apply small amount of our Eye Cream under your eyes and around the sides</p>
            </div>
        </div>

    </div>
</div>
    </section>
  `;
};
