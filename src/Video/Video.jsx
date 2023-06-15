import styles from './Video.module.scss';

const Video = ({ urlToVideo }) => {
    return(
        <section className={styles.wholeVideoComponent}>
            <video autostart="true" muted controls autoPlay loop src={urlToVideo} className={styles.video}>
                <span>Your browser doesn't support the video tag.</span>
            </video>
        </section>
    )
}

export default Video;