export const renderRoutine = () => {
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22">
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(1 1.00074)" d="M0 9.7355375C0 4.3579912 4.2525558 0 9.5 0C14.747444 0 19 4.3579912 19 9.7355375C19 15.113083 14.747444 19.471075 9.5 19.471075C4.2525558 19.471075 0 15.113083 0 9.7355375Z" fill-rule="evenodd"/>
	<path fill="none" stroke="#2E302E" stroke-width="2" stroke-miterlimit="10" transform="translate(6 1.00074)" d="M17 0L4.7473617 12.297521L0 7.5354562" fill-rule="evenodd"/>
</svg>`;
  return `
<section class="skincare-hero main-content">
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell small-12">
            <div class="promo-banner">
              Just <u>one minute</u> a day will make your skin look healthier and younger
            </div>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          
          <div class="cell small-12 medium-6">
            <h1 class="main-title">A SIMPLE ROUTINE THAT WORKS</h1>
            <p class="description">
              Say goodbye to complicated skincare routines. Our mens' skincare line is designed for simplicity and effectiveness. With our lightweight formulas, you can achieve healthier and younger-looking skin with minimal effort. Perfect for guys who are new to skincare or just want to keep it simple.
            <hr class="separator">
            <ul class="feature-list no-bullet">
              <li>${checkIcon} Lightweight formulas</li>
              <li>${checkIcon} Easy to use formats</li>
              <li>${checkIcon} Clean Ingredients</li>
              <li>${checkIcon} Everything you need, nothing you don't</li>
            </ul>
          </div>

          <div class="cell small-12 medium-6">
            <div class="product-visual-wrapper">
              <img src="src/assets/images/simple-routine.png" />
            </div>
          </div>

        </div>
      </div>


      <div class="grid-container">
        <div class="grid-x grid-margin-x align-center features-card">
        
        <div class="cell small-12 medium-12 large-4 feature-item">
            <div class="circle-crop">
                <img src="src/assets/images/cutting-edge.png" alt="Korean Skincare Technology">
            </div>
            <div class="feature-text">
                Cutting-edge<br>
                Korean Skincare<br>
                Technology
            </div>
        </div>

        <div class="cell small-12 medium-12 large-4 feature-item">
            <div class="circle-crop">
                <img src="src/assets/images/science-back.png" alt="Science-backed Ingredients">
            </div>
            <div class="feature-text">
                Science-backed<br>
                Ingredients
            </div>
        </div>

        <div class="cell small-12 medium-12 large-4 feature-item">
            <div class="circle-crop">
                <img src="src/assets/images/dematologically.png" alt="Dermatologically Tested">
            </div>
            <div class="feature-text">
                Dermatologically<br>
                Tested
            </div>
        </div>

    </div>
      </div>

    </section>
  `;
};
