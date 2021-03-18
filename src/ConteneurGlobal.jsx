import { useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import Accueil from './Accueil';
import APropos from './APropos';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

export default function ConteneurGlobal() {
   // Vérifier s'il y a qqchose dans localStorage avec la clé 'panier-4pa'. 
   let panier = {};
   if(window.localStorage.getItem('panier-4pa')) {
     panier = JSON.parse(window.localStorage.getItem('panier-4pa'));
   }

  //Utiliser la gestion de l'état avec "useState"
  const etatPanier = useState({});
  console.log("Le panier ressemble à ça :", etatPanier[0]);
  console.log("Ce que retourne useState", etatPanier);

  // Sauvegarder le panier dans localStorage à chq fois que l'état du panier est muté
  window.localStorage.setItem('panier-4pa', JSON.stringify(etatPanier[0]));

  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
       <section className="contenuPrincipal">
         <Switch>
           <Route path="/" exact>
             <Accueil/>
           </Route>
           <Route path="/nos-produits">
             <ListeProduits etatPanier={etatPanier} />
           </Route>
           <Route path="/a-propos-de-nous">
             <APropos/>
           </Route>
           <Route path="/contactez-nous">
             <Contact/>
           </Route>
         </Switch>
       </section>
       <PiedDePage />
    </div>
  );
}
