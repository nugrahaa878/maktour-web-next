'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import HeroSectionSearch from "@/components/HeroSectionSearch";
import Navbar from "@/components/navbar";
import TopicList from "@/components/TopicList";
import BreadCrumb from '@/components/BreadCrumb';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen">
      <Navbar isWhiteBackground />
      <HeroSectionSearch
        title="Bantuan"
        description="Hi, apa yang dapat kami bantu?"
        onSearch={handleSearch}
      />
      <div className="container mx-auto px-4 pt-16">
        <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Help', href: '#' }]} />
      </div>
      <TopicList searchQuery={searchQuery} />
    </main>
  );
}

export default HelpPage;