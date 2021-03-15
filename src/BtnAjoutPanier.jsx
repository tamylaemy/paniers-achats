import { Badge } from '@material-ui/core';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props) {
    return (
        <Badge badgeContent={props.qte} color="primary">
            <button className={'BtnAjoutPanier ' + props.classeCSS} onClick={props.onClick}>
                {props.texte}
            </button>
        </Badge>
    );
}

// style={{backgroundColor: props.couleur}}