import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classNames';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youlu Downloader',
  description: '율루로 다운로드',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
      <div className='main'>
        <div className='nav'>
          <div className='btn'><a href="/"><span className="material-icons-round" style={{ fontSize: '25px'}}>home</span></a></div>
          <div className='btn'><a href="/"><span className="material-icons-round" style={{ fontSize: '25px'}}>login</span></a></div>
        </div>

      </div>
      {children}
    </html>
  )
}
