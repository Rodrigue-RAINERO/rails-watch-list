document.addEventListener('turbo:load', function () {
  const deleteListButton = document.getElementById('deleteListButton');

  if (deleteListButton) {
    deleteListButton.addEventListener('turbo:click', async function (event) {
      // Afficher une boîte de dialogue de confirmation
      if (!confirm("Are you sure?")) {
        // Annuler l'événement si l'utilisateur choisit d'annuler
        event.preventDefault();
      } else {
        // Récupérer l'ID de la liste à partir de l'attribut data
        const listId = deleteListButton.getAttribute('data-list-id');

        // Attendez la fin de la suppression (événement TurboDrive)
        const endDeletePromise = new Promise(resolve => {
          deleteListButton.addEventListener('turbo:load', resolve, { once: true });
        });

        // Déclencher la suppression (cliquer sur le bouton)
        deleteListButton.click();

        // Attendre la fin de la suppression
        await endDeletePromise;

        // Utiliser l'ID de la liste pour créer un sélecteur unique
        const listSelector = `.list-item[data-list-id="${listId}"]`;

        // Peut-être faire quelque chose après la suppression, par exemple, vérifier que l'élément a été supprimé
        const listElement = document.querySelector(listSelector);
        if (!listElement) {
          console.log(`La liste avec l'ID ${listId} a été supprimée avec succès.`);
        } else {
          console.error(`La liste avec l'ID ${listId} n'a pas été supprimée correctement.`);
        }
      }
    });
  }
});
