import Image from 'next/image'
import styles from './page.module.css'
import classNames from 'classNames';

export default function Home() {
  return (
    <main className={styles.center}>
      <div classNames={classNames({ [styles.flexrow]: true, [styles.noto_sans_L]: true })}>
        <img className={styles.preview}src="/b1.png"></img>
      </div>
      <div className={styles.title}>
      <h1 className='noto_sans_X'>Youlu 다운로더</h1>
      </div>
      <div className={styles.desc}>
      <h4 className='noto_sans'>Youlu 단축어 하나로<br/>유튜브, 트위터, 릴스, 커뮤니티 사이트의 영상을 다운로드할 수 있어요.<br/></h4>
      </div>

    <div className={styles.download}><h3 className={styles.download_btn}>단축어 추가 (Beta)</h3></div>
    </main>
  )
}
