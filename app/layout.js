import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Youlu 단축어 추가하기',
  description: 'iPhone에서 율루로 다운로드하세요.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
      <div className='main'>
        <div className='nav'>
          <div className='btn'><a href="/youlu"><span className="material-icons-round" style={{ fontSize: '25px',color:'rgb(72, 128, 238)'}}>home</span></a></div>

          <div className='btn'><a href="/youlu/"><span className="material-icons-round" style={{ fontSize: '25px',color:'rgb(72, 128, 238)'}}>share</span></a></div>
        </div>
      </div>
      {children}
      <footer style={{width: '100vw', zIndex: '1', bottom:'0', position: 'fixed'}}>
                    <div className='footer'>
                    <span className="material-icons-round" style={{ fontSize: '20px', marginRight:'15px', marginLeft:'-8px'}}>ios_share</span>
                    <div className='footer-desc'> 공유 시트를 열어 어디서든 다운로드할 수 있어요.</div>
                    </div> 
                </footer>
    </html>
  )
}
