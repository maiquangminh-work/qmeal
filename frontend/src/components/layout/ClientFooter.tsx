'use client';
import { useStore } from '@/store/useStore';
import Footer from './Footer';

export default function ClientFooter() {
  const { language } = useStore();
  return <Footer language={language} />;
}