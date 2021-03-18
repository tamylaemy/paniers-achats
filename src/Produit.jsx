import BtnAjoutPanier from './BtnAjoutPanier'
import './Produit.scss'

export default function Produit({id, nom, etatPanier, prix}) {
  const [panier, setPanier] = etatPanier;

  function ajouterAuPanier() {
    const article = panier[id];
    if (article) {
      article.qte++;
    }

    else {
      panier[id] = {prix: prix, qte: 1}
    }

    //Tant qu'on n'a pas fait appel à setPanier, React ne sait pas qu'il faut rafraichir l'état du panier
    setPanier({...panier});
  }

  let qteArticlePanier = 0;
  let texteBtnAjout = "Ajouter au panier";
  let btnAjoutClasseCSS = "";
  let btnCouleurAjout = "";

  if(panier[id]) {
    qteArticlePanier = panier[id].qte;
    texteBtnAjout = "Augmenter au panier";
    btnCouleurAjout = "#dc143c";
    btnAjoutClasseCSS = "rouge"
  }

  return (
    <li className="Produit">
      <img src={'images-produits/' + id + '.webp'} alt={nom}/>
        <div className="info">
          <p className="nom">{nom}</p>
          <p className="prix">{prix} $CA</p>
        </div>
      <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} classeCSS = {btnAjoutClasseCSS} couleur={btnCouleurAjout}/>
    </li>
  );
}