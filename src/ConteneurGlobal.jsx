import { useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

export default function ConteneurGlobal() {
  //structure qui va contenir le panier d'achat
  /* let panier = {
    "prd0002" : {prix: 17.88, qte: 2},
    "prd0025" : {prix: 9.99, qte: 1},
    "prd0851" : {prix: 12.67, qte: 15}
  } */

  //Utiliser la gestion de l'état avec "useState"
  const etatPanier = useState({ "prd0002" : {prix: 17.88, qte: 2},
                                "prd0025" : {prix: 9.99, qte: 1},
                                "prd0851" : {prix: 12.67, qte: 1}});
  console.log("État Panier", etatPanier);

  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
       <section className="contenuPrincipal">
          <ListeProduits />
       </section>
       <PiedDePage />
    </div>
  );
}
