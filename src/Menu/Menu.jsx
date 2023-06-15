import styles from './Menu.module.scss';

const Menu = ({ onSelectVideo, arrayOfVideoKeys, selectedVideoName }) => {
    return(
        <section className={styles.wholeMenuSection}>
            {arrayOfVideoKeys.map((value, id) => {
                return (
                    <div key={id} onChange={() => onSelectVideo(value)} className={`${styles.radioDiv} ${selectedVideoName === value && styles.selectedRadioDiv}`}>
                        <label htmlFor={`src${id}`}>
                            <input type='radio' id={`src${id}`} name="src" value={value} className={styles.radio}/>
                            <span>{value.toUpperCase()}</span>
                        </label>
                    </div>
                );
            })}
        </section>
    );
};

export default Menu;