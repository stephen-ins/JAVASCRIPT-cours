const BASE_URL = "data/photographers.json";

export const getData = async () => {
  try {
    // fetch(BASE_URL) permet de récupérer les données depuis le fichier data.json en fonction de l'URL.
    // Fetch envoie une requête HTTP dans le fichier data.json afin de récupérer les données du fichier.
    const response = await fetch(BASE_URL);
    // console.log(response);

    return response.json();
  } catch (error) {
    return new Error("Erreur lors de la récupération des données");
  }
};

export const getPhotographers = async () => {
  const data = await getData();
  return data.photographers;
};

export const getPhotographerById = async () => {
  try {
    // Récupérer l'ID depuis l'URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerId = urlParams.get("id");

    if (!photographerId) {
      throw new Error("Aucun ID de photographe trouvé dans l'URL");
    }

    const photographers = await getPhotographers();

    // Utiliser find au lieu de filter car on cherche un seul photographe
    const photographer = photographers.find(
      (p) => p.id === parseInt(photographerId)
    );

    if (!photographer) {
      throw new Error(`Aucun photographe trouvé avec l'ID: ${photographerId}`);
    }

    // Récupérer les données complètes pour avoir accès aux médias
    const allData = await getData();

    // Récupérer les médias du photographe
    const media = allData.media.filter(
      (m) => m.photographerId === parseInt(photographerId)
    );

    return {
      photographer,
      media,
    };
  } catch (error) {
    console.error("Erreur dans getPhotographerById:", error);
    throw error;
  }
};
