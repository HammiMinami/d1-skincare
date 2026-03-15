export const renderHero = () => {
  return `
<section class="hero-banner">
    <div class="grid-container">
        <div class="row grid-x">
            
            <div class="small-12 medium-7 columns">
                <h1 class="hero-title">Skincare for guys that aren't into skincare</h1>
                
                <a class="cta-button-yellow" href="#set1">Try Today!</a>

                <div class="hero-testimonial">
                    <div class="star-rating">★★★★★</div>
                    <p class="quote-text">“I love this stuff, it totally changed the game for me”</p>
                    <div class="user-info">
                        <div class="user-badge">P.S</div>
                        <span class="user-handle">PETER S.</span>
                    </div>
                </div>
            </div>

            <div class="small-12 medium-5 columns hero-visual-container">
                <img src="src/assets/images/banner-product.png" 
                     alt="D1 Complete Skincare Set" 
                     class="floating-products">
            </div>

        </div>
    </div>
</section>
  `;
};
