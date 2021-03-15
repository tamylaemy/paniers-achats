import BtnAjoutPanier from './BtnAjoutPanier'
import './Produit.scss'

export default function Produit(props) {
  const [panier, setPanier] = props.etatPanier;

  function ajouterAuPanier() {
    const article = panier[props.id];
    if (article) {
      article.qte++;
    }

    else {
      panier[props.id] = {prix: props.prix, qte: 1}
    }

    //Tant qu'on n'a pas fait appel à setPanier, React ne sait pas qu'il faut rafraichir l'état du panier
    setPanier({...panier});
  }

  let qteArticlePanier = 0;
  let texteBtnAjout = "Ajouter au panier";
  let btnAjoutClasseCSS = "";
  let btnCouleurAjout = "";

  if(panier[props.id]) {
    qteArticlePanier = panier[props.id].qte;
    texteBtnAjout = "Augmenter au panier";
    btnCouleurAjout = "#dc143c";
    btnAjoutClasseCSS = "rouge"
  }

  return (
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
        <div className="info">
          <p className="nom">{props.nom}</p>
          <p className="prix">{props.prix} $CA</p>
        </div>
      <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} classeCSS = {btnAjoutClasseCSS} couleur={btnCouleurAjout}/>
    </li>
  );
}