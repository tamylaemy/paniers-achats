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
  //Utiliser la gestion de l'état avec "useState"
  const etatPanier = useState({});

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
