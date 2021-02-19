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
    console.log(panier);

    //Tant qu'on n'a pas fait appel à setPanier, React ne sait pas qu'il faut rafraichir l'état du panier
    setPanier({...panier});
  }

  return (
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
        <div className="info">
          <p className="nom">{props.nom}</p>
          <p className="prix">{props.prix} $CA</p>
        </div>
      <BtnAjoutPanier onClick={ajouterAuPanier} />
    </li>
  );
}