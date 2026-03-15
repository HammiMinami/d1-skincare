export const renderTestimonials = () => {
  return `
    <section class="testimonials-section">
    <div class="grid-container">
        <p class="testimonial-intro">Here is what our customers say</p>
        
        <div class="row small-up-1 medium-up-3" data-equalizer data-equalize-on="medium">
            
            <div class="column small-12 medium-12 large-4">
                <div class="testimonial-card" data-equalizer-watch>
                    <div>
                        <div class="star-rating">★★★★★</div>
                        <p class="testimonial-text">
                            “The testosterone support my daily regimine has needed for ages! I haven’t felt this young in years.”
                        </p>
                    </div>
                    <div class="user-profile">
                        <div class="user-initials">BS</div>
                        <div class="user-meta">
                            <span class="user-name">Eric Trexler</span>
                            <span class="user-title">MEN’S WELLNESS INFLUENCER</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column small-12 medium-12 large-4">
                <div class="testimonial-card" data-equalizer-watch>
                    <div>
                        <div class="star-rating">★★★★★</div>
                        <p class="testimonial-text">
                            “The testosterone support my daily regimine has needed for ages! Thanks Joymode, I will definitely be renewing my subscription”
                        </p>
                    </div>
                    <div class="user-profile">
                        <div class="user-initials">BS</div>
                        <div class="user-meta">
                            <span class="user-name">Ben Steelheart</span>
                            <span class="user-title">PH.D., HUMAN MOVEMENT SCIENCE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column small-12 medium-12 large-4">
                <div class="testimonial-card" data-equalizer-watch>
                    <div>
                        <div class="star-rating">★★★★★</div>
                        <p class="testimonial-text">
                            “I dont miss a day without it now. This is the best stuff on the market for sure!”
                        </p>
                    </div>
                    <div class="user-profile">
                        <div class="user-initials">HR</div>
                        <div class="user-meta">
                            <span class="user-name">Harrison Rockwell</span>
                            <span class="user-title">MEN’S WELLNESS INFLUENCER</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  `;
};
