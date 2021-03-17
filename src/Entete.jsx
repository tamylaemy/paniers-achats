import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import SommairePanier from './SommairePanier';
import { Link, NavLink } from 'react-router-dom';

export default function Entete(props) {
    console.log("Etat panier dans l'Entête :", props.etatPanier);
    // Notez la "décomposition" de tableau
    const [panier, setPanier] = props.etatPanier;
    // console.log("Le panier :", panier);
    // const articlesTab = Object.values(panier);
    // console.log("Les articles dans un tableau :", articlesTab);

    // //Façon IMPÉRATIVE d'obtenir de l'information d'un tableau
    // let nombreArticles =0 ;
    // for(let i=0; i<articlesTab.length; i++) {
    //     nombreArticles += articlesTab[i].qte;
    // }
    
    //Façon DÉCLARATIVE d'obtenir de l'information d'un tableau
    // const nombreArticles2 = articlesTab.reduce((acc, article) => acc + article.qte, 0);
    // ou
    // const nombreArticles2 = articlesTab.reduce(function (acc, article) { retunr : acc + article.qte } , 0);
    
    return (
        <header className="Entete">
            <div className="logo"><Link to="/">Logo</Link></div>
            <ul className="navPrincipale">
                <li><NavLink activeClassName="urlActive" to="/nos-produits">Produits</NavLink></li>
                <li><NavLink activeClassName="urlActive" to="/a-propos-de-nous">À propos de nous</NavLink></li>
                <li><NavLink activeClassName="urlActive" to="/contactez-nous">Contactez-nous</NavLink></li>
            </ul>
            <ul className="navUtilisateur">
                <li>
                    <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc + article.qte, 0)} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                    <SommairePanier panier={panier}/>
                    </li>
                <li>Mon compte</li>
            </ul>
       </header>
    )
}