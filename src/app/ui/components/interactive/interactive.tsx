'use client';
import React from 'react';
import Header from '../header/header';
import { useScreenEvents } from '@/app/lib/hooks/useScreenEvents';
import CursorLight from './cursorLight';
import ProgressBar from './progressBar';

export default function Interactive() {
  const { coordinates, progress, opacity, isMobileDevice } = useScreenEvents();

  return (
    <>
      <ProgressBar progress={progress} />
      <Header
        isMobile={isMobileDevice}
        scroll={parseInt(progress)}
      />
      <CursorLight
        x={coordinates.x}
        y={coordinates.y}
      />
    </>
  );
}
