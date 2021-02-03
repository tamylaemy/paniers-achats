import './ListeProduits.css';
import Produit from './Produit';

export default function ListeProduits(props) {
    return (
    <>
        <h2> Produits disponibles</h2>
        <ul className="listeProduits">
            <Produit nom="Cardigan à capuchon en molleton" prix="76.00" id="prd0001" />
            <Produit nom="Cardigan rose pâle en molleton" prix="84.95" id="prd0002" />
            <Produit nom="Cardigan bleu marine ouvert à l’avant" prix="77.00" id="prd0003" />
        </ul>
    </>
    );
}