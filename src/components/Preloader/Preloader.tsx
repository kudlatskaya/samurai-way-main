import preloader from "../../asets/images/preloader.svg";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;