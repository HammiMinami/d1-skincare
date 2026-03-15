export const renderIngredients = () => {
  const ingredientList = [
    {
      title: "Hyaluronic Acid",
      description: "All Day Moisturizer",
      icon: "src/assets/images/hyaluronic-acid.png",
    },
    {
      title: "Niacinamide",
      description: "All Day Moisturizer",
      icon: "src/assets/images/niacinamide.png",
    },
    {
      title: "Bamboo Charcoal",
      description: "All Day Moisturizer",
      icon: "src/assets/images/bamboo-charcoal.png",
    },
    {
      title: "Centella Asiatica",
      description: "Charcoal Cleanser",
      icon: "src/assets/images/centella.png",
    },
    {
      title: "Rose Oil",
      description: "Charcoal Cleanser",
      icon: "src/assets/images/rose-oil.png",
    },
    {
      title: "Ceramide Blend",
      description: "Bamboo Charcoal",
      icon: "src/assets/images/charcoal-cleanser.png",
    },
  ];

  const ingredientTiles = ingredientList
    .map(
      ({ title, description, icon }) => `
      <div class="column small-6 medium-6 large-4">
            <div class="ingredient-tile">
                <div class="ingredient-thumb">
                    <img src="${icon}" alt="${title} icon" >
                </div>
                <div class="ingredient-info">
                    <span class="ingredient-name">${title}</span>
                    <span class="ingredient-product">${description} </span>
                </div>
            </div>
        </div>
      `,
    )
    .join("");

  return `
    <section class="ingredients">
      <div class="grid-container">
    <div class="row">
        <div class="small-12 columns ingredient-header">
            <h2>Best-In-Class Ingredients That Work</h2>
            <a href="#" class="btn-ingredient">Full Ingredient List</a>
        </div>
    </div>

    <div class="row small-up-1 medium-up-3">
      ${ingredientTiles}
    </div>
</div>

    </section>
  `;
};
