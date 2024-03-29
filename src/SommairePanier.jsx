import "./SommairePanier.scss";

export default function SommairePanier(props) {
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

  // Nombre d'articles différents
  objetInfo.articlesDiff = articles.length;

  // Nombre d'articles total
  objetInfo.nbArticlesTotal = articles.reduce((acc, article) => acc + article.qte, 0);

    // Remarquez que pour les 3 valeurs suivantes les valeurs calculées sont séparées des valeurs formatées

  // Sous-total du panier 
  const sousTotal = articles.reduce((acc, article) => acc + (article.qte * article.prix), 0);
  objetInfo.sousTotal = sousTotal.toFixed(2);

  // TPS
  const tps = sousTotal * 0.05;
  objetInfo.tps = tps.toFixed(2);

  // TVQ 
  const tvq = sousTotal * 0.09975;
  objetInfo.tvq = tvq.toFixed(2)

  // Total (on utilise les valeurs calculées et non pas les valeurs formatées)
  objetInfo.total = (sousTotal + tps + tvq).toFixed(2);

  return objetInfo;
}