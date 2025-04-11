'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import HeroSectionSearch from "@/components/HeroSectionSearch";
import Navbar from "@/components/navbar";
import TopicList from "@/components/TopicList";

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
      <TopicList searchQuery={searchQuery} />
    </main>
  );
}

export default HelpPage;