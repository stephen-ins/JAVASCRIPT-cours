const BASE_URL = "data/data.json";

export const getData = async () => {
  try {
    // l'API Fetch (récupérer) fournit une interface JavaScript pour accéder et manipuler des données.
    // Fetch() ici envoi une requête à partir d'une URL dans le fichier data.json afin de récupérer son contenu.
    // l'opérateur await permet d'attendre la résolution d'une promesse. Il ne peut être utilisé au sein une fonction asynchrone.
    // Si la requête est correcte, le status est à "200".
    const response = await fetch(BASE_URL);
    // console.log(response);
    // console.log(response.json());
    return response.json();
  } catch (error) {
    return new Error("Quelque chose ne va pas.");
  }
};

export const getPeintres = async () => {
  const data = await getData();
  return data;
};

export const getTableauxByPeintre = async () => {
  //   console.log("getTableauxByPeintre");

  //   window.location.search est une propriété de l'objet window qui renvoie la partie query string d'une URL. (ex : ?peintre=Picasso | index=valeur )
  const queryString = window.location.search;
  //   console.log(queryString);

  //   urlParams est une instance de l'objet URLSearchParams qui permet de manipuler les paramétres de la query string.
  const urlParams = new URLSearchParams(queryString);
  let peintre = urlParams.get("peintre");
  const datas = await getPeintres();
  // console.log(peintre);
  // console.log(queryString);
  // console.log(datas);
  let data;

  // On entre dans le if seulement dans le cas où l'indice ?peintre= n'est pas défini dans l'URL, on entre uniquement dans ce cas dans la première visit de la page Web.
  if (!peintre) {
    // console.log(Object.keys(datas)[0]);
    // console.log("pas de params dans l'url");

    // Récupère le premier indice(index) de l'objet datas, ici "Caillebotte".
    const index = Object.keys(datas)[0];
    // console.log(index);

    // data =  datas["Caillebotte"];
    data = datas[index];

    // peintre = "Caillebotte";
    peintre = index;
  }

  for (const key in datas) {
    if (key === peintre) {
      // console.log("key :" + key);
      // console.log("peintre :" + peintre);

      // data =  datas["Van Gogh"];
      data = datas[key];

      //   switch (peintre) {
      //     case "Picasso":
      //       data = datas.Picasso;
      //       break;
      //     case "Caillebotte":
      //       data = datas.Caillebotte;
      //       break;
      //     case "Vermeer":
      //       data = datas.Vermeer;
      //       break;
      //     case "Kandinsky":
      //       data = datas.Kandinsky;
      //       break;
      //     case "Monet":
      //       data = datas.Monet;
      //       break;
      //     case "Van Gogh":
      //       data = datas.Van_Gogh;
      //       break;
      //     default:
      //       data = datas.Picasso;
      //   }
      //   // console.log(data);

      // ?? : condition IF ternaire, SI peintre contient un peintre, on affecte la valeur de la variable peintre SINON on affecte la valeur "Picasso"//    ?? "Picasso", if(peintre) peintre else Picasso ? peintre : "Picasso";
      return {
        name: peintre,
        data: data.tableaux,
      };
    }
  }
};
