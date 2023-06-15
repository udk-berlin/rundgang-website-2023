import styles from '@/styles/pages/landing/BackgroundVideo.module.css'

export default function BackgroundVideo () {
  return (
    <video
      className={styles.container}
      autoPlay
      muted
      loop
      playsInline
      poster="/assets/media/images/background_video1_fallback.jpg"
    >
      <source
        src={'/assets/media/videos/background_video1.webm'}
        type="video/webm"
      />
    </video>
  )
}
