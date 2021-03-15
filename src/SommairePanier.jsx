import "./SommairePanier.scss";

export default function SommairePanier(props) {
console.log(props.etatPanier);
const info = calculerInfoPanier(props.panier);
    return (
        <div className="SommairePanier">
            <span> Articles différents : {info.articlesDiff} </span>
            <span> Nombre articles total : {info.nbArticlesTotal} </span>
            <span> Sous-total : {info.sousTotal} </span>
            <span> TPS : {info.tps} </span>
            <span> TVQ : {info.tvq} </span>
            <span> Total : {info.total} </span>
        </div>
    )
}

/**
 * 
 * @param {object} objetPanier  Objet contenant le détail du panier
 * 
 * @returns {object} Objet contenant toutes les valeurs requises
 */

function calculerInfoPanier(objetPanier) {
    // Objet contenant les valeurs à calculer
    const objetInfo = {
        articlesDiff : 0,
        nbArticlesTotal: 0,
        sousTotal: 0,
        tps: 0,
        tvq: 0,
        total: 0
    }
    
    // Extraaire le tableau de valeurs de l'objet contenant le panier
 const articles = Object.values(objetPanier);

    // Nb d'articles différents
    objetInfo.articlesDiff = articles.length;

    // Nb d'articles totales
    objetInfo.nbArticlesTotal = articles.reduce((acc, article) => acc + article.qte, 0);

    // Sous-total du panier 
    objetInfo.sousTotal = articles.reduce((acc, article) => acc + (article.qte*article.prix), 0).toFixed(2);

    // Tps
    objetInfo.tps = (objetInfo.sousTotal * 0.05).toFixed(2);

    // Tvq
    objetInfo.tvq = (objetInfo.sousTotal * 0.09975).toFixed(2);

    // Total
    objetInfo.total = (objetInfo.sousTotal + objetInfo.tps + objetInfo.tvq).toFixed(2);

    return objetInfo;
}
