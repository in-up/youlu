'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'

const handleCopyClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('클립보드에 링크가 복사되었습니다.');
  } catch (e) {
    alert('복사에 실패하였습니다');
  }
};

export default function Home() {
  return (
    <main>
        <p>version:"1.0.0"</p>
    </main>
  )
}
