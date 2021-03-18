import { useEffect, useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import Accueil from './Accueil';
import APropos from './APropos';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

export default function ConteneurGlobal() {
  // const [compteur, setCompteur] = useState(0);

  //Utiliser la gestion de l'état avec "useState"
    // Utiliser "Lazy Initialization"
    const etatPanier = useState(
      () => window.localStorage.getItem('panier-4pa') ? JSON.parse(window.localStorage.getItem('panier-4pa')) : {}
    );
    const [panier] = etatPanier;

  // Sauvegarder le panier dans localStorage à chq fois que l'état du panier est muté
  // Utiliser le 'HOOK' useEffect()
  // Voir la docu : https://reactjs.org/docs/hooks-intro.html
  useEffect(
    () => window.localStorage.setItem('panier-4pa', JSON.stringify(panier))
    , [panier] 
    // Tableau des dépendances : 
        // 1) si cet argument est absent (pas de tableau) : DANGER : l'effet est exécuté chaque fois que le composant est raffraîchi
        // 2) Si cet argument est un tableau vide ([]) : SAFE : l'effet est exécuté une seule fois, EXACTEMENT APRÈS que le composant a été affiché par React
        // 3) Si ce tableau contient des variables : l'effet est exécuté à toutes les fois que l'une ou l'autre des variables du tableau est modifiée
  );
  // window.localStorage.setItem('panier-4pa', JSON.stringify(etatPanier[0]));

  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
       <section className="contenuPrincipal">
         <Switch>
           <Route path="/" exact>
             <Accueil/>
           </Route>
           <Route path="/nos-produits">
             {/* <button onClick={() => setCompteur(compteur + 1)}>Cliquez pour augmenter le compteur ({compteur})</button> */}
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
