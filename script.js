let recipes = [
    { id: 1, name: 'Pasta Carbonara', ingredients: 'Spaghetti, Eggs, Bacon, Parmesan Cheese', instructions: 'Cook spaghetti. Fry bacon. Mix eggs and cheese. Combine all ingredients.' },
  
  ];
  
  const recipesContainer = document.getElementById('recipes');
  const recipeFormSection = document.getElementById('recipeForm');
  const recipeForm = document.getElementById('recipeFormContainer');
  
  function displayRecipes() {
    recipesContainer.innerHTML = '';
    recipes.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe');
      recipeItem.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <button onclick="editRecipe(${recipe.id})">Edit</button>
        <button onclick="deleteRecipe(${recipe.id})">Delete</button>
      `;
      recipesContainer.appendChild(recipeItem);
    });
  }
  
  function showRecipeForm() {
    recipeFormSection.classList.remove('hidden');
  }
  
  function hideRecipeForm() {
    recipeFormSection.classList.add('hidden');
    recipeForm.reset();
  }
  
  function saveRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const recipeIngredients = document.getElementById('recipeIngredients').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;
  
    const newRecipe = {
      id: recipes.length + 1,
      name: recipeName,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    };
  
    recipes.push(newRecipe);
    hideRecipeForm();
    displayRecipes();
  }
  
  function editRecipe(id) {
    const recipeToEdit = recipes.find(recipe => recipe.id === id);
    if (recipeToEdit) {
      document.getElementById('recipeName').value = recipeToEdit.name;
      document.getElementById('recipeIngredients').value = recipeToEdit.ingredients;
      document.getElementById('recipeInstructions').value = recipeToEdit.instructions;
      showRecipeForm();
    }
  }
  
  function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    displayRecipes();
  }
  
  document.getElementById('cancelBtn').addEventListener('click', hideRecipeForm);
  document.getElementById('saveRecipeBtn').addEventListener('click', saveRecipe);
  document.getElementById('addRecipeBtn').addEventListener('click', showRecipeForm);
  
  displayRecipes();
  