import "./SommairePanier.scss";

export default function SommairePanier(props) {
  console.log("Le panier  dans SommairePanier : ", props.panier);
  const info = calculerInfoPanier(props.panier);
  return (
    <div className="SommairePanier">
      <span>Articles différents : {info.articlesDiff}</span>
      <span>Nombre articles total : {info.nbArticlesTotal}</span>
      <span>Sous-total : {info.sousTotal}</span>
      <span>TPS : {info.tps}</span>
      <span>TVQ : {info.tvq}</span>
      <span>Total : {info.total}</span>
    </div>
  )
}

/**
 * Calcule les valeurs nécéssaire à l'affichage du sommaire du panier
 * 
 * @param {object} objetPanier Objet contenant le détail du panier 
 * 
 * @returns {object} Objet contenant toutes les valeurs requises
 */
function calculerInfoPanier(objetPanier) {
  // Objet contenant les valeurs à calculer
  const objetInfo = {
    articlesDiff: 0,
    nbArticlesTotal: 0,
    sousTotal: 0,
    tps: 0,
    tvq: 0,
    total: 0
  }

  // Extraire le tableau des valeurs de l'objet contenant le panier
  const articles = Object.values(objetPanier);
  //console.log("Le tableau des articles dans le panier : ", articles);

  // Nombre d'articles différents
  objetInfo.articlesDiff = articles.length;

  // Nombre d'articles total
  objetInfo.nbArticlesTotal = articles.reduce((acc, article) => acc + article.qte, 0);

  // Sous-total du panier (corriger au retour de la semaine de relâche pour ne pas arrondir avant le calcul des taxes)
  objetInfo.sousTotal = articles.reduce((acc, article) => acc + (article.qte*article.prix), 0).toFixed(2);

  // TPS
  objetInfo.tps = (objetInfo.sousTotal * 0.05).toFixed(2);

  // TVQ 
  objetInfo.tvq = (objetInfo.sousTotal * 0.09975).toFixed(2);

  // Total (à corriger une fois que nous aurons gardé les nombres sans toFixed())
  objetInfo.total = ((objetInfo.sousTotal - 0) + (objetInfo.tps - 0) + (objetInfo.tvq - 0)).toFixed(2);

  return objetInfo;
}