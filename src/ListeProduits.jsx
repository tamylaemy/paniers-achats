import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {

   // let composantsProduit = [];

    // 1. Avec la boucle for 
    /* for(let i=0; i<tabProduits.length; i++) {
         composantsProduit[i] = <Produit nom={tabProduits[0].nom} prix={tabProduits[0].prix} id={tabProduits[0].id} />
    }; */
    
    //2. Avec la méthode for each
    /* tabProduits.forEach(function(p){
        composantsProduit.push(<Produit nom={p.nom} prix={p.prix} id={p.id} />)
    }) */

    return (
    <div className="ListeProduits" >
        <h2> Produits disponibles</h2>
        <ul className="ul-produits">
            {/* {composantsProduit} */}

            {
                //Utilisation d'une fonction fléchée
                tabProduits.map(unProd => <Produit nom={unProd.nom} prix={unProd.prix} id={unProd.id} />)
            }
            
        </ul>
    </div>
    );
}