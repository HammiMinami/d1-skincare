export const renderFooter = () => {
  return `
<footer class="site-footer">
    <div class="grid-container">
        <div class="small-11 medium-11">
            <div class="small-12 medium-12 columns">
                <h3 class="footer-cta-head">JOIN THE D1 CLUB</h3>
                <p class="footer-cta-sub">Subscribe for deals, and tips on mens skincare</p>
                
                <div class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button class="submit-btn">Submit</button>
                </div>

                <div class="social-links">
                    <a href="#" class="social-link"><img src="src/assets/images/ig.svg" alt="Instagram"></a>
                    <a href="#" class="social-link"><img src="src/assets/images/tiktok.svg" alt="TikTok"></a>
                    <a href="#" class="social-link"><img src="src/assets/images/fb.svg" alt="Facebook"></a>
                </div>
            </div>

            <div class="small-12 medium-5 columns text-right-medium">
                <div class="logo-footer"><img src="src/assets/images/d1-logo.svg" alt="D1 Skincare" /></div>
            </div>
        </div>

        <div class="row">
            <div class="small-12 medium-4 columns">
                <h4 class="footer-nav-head">SUPPORT</h4>
                <ul class="footer-nav-list">
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQS</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="small-12 medium-4 columns">
                <h4 class="footer-nav-head">COMPANY</h4>
                <ul class="footer-nav-list">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Philosophy</a></li>
                </ul>
            </div>

            <div class="small-12 medium-6 columns">
                <div class="fda-disclaimer">
                    These statements have not been evaluated by the Food and Drug Administration. This product is not inteded to diagnose, treat, cure, or prevent any disease. Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>

        <div class="row footer-bottom">
            <div class="small-12 columns">
                @D1 2026 — site by manufactur
            </div>
        </div>
    </div>
</footer>
  `;
};
