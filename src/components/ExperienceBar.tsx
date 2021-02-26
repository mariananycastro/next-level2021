import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
  return (
    <div className={styles.experienceBar}>
      <span>0%</span>
      <div>
        <div style={{ width: '60%' }} />
        <span className={styles.currenteExperience} style={{ left: '60%' }}> 60% </span>
      </div>
      <span>100%</span>
    </div>
  )
}

export default ExperienceBar

//   https://javascript.info/xmlhttprequest
  // requester status