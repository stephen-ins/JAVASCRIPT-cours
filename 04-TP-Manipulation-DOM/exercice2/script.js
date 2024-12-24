const copyValue = (field1) => {
  // Field1 est une variable de réception que NOUS définissons permettant ici de réceptionner le premier champ de saisi du formulaire lorsque l'utilisateur saisi des données à l'intérieur du champ

  console.log(field1.value);
  const field2 = document.querySelector("#field2");

  //   On affecte comme valeur par défaut au champ de saisi 2 la valeur du champ de saisi 1
  console.log(field2);
  field2.value = field1.value;
};
