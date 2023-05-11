import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number,
}

const DialogItem = (props: DialogItemPropsType) => {
    let {name, id} = props;
    let path = '/dialogs/' + id;

    return <>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.link} activeClassName={s.active}>{name}</NavLink>
        </div>
    </>
}

export default DialogItem;