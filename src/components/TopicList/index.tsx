'use client'

import { useGetFaqCategory } from '@/hooks/useGetFaqCategory';
import TopicCard from '../TopicCard';
import { useLanguage } from '@/context/LanguageContext';

interface TopicListProps {
  searchQuery?: string;
}

const TopicList = ({ searchQuery = '' }: TopicListProps) => {
  const { language } = useLanguage();
  const { data, error, isLoading } = useGetFaqCategory();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-red-600">Failed to load Help Category.</p>
        </div>
      </div>
    );
  }

  const topicList = data?.data
    .filter((topic) => topic.locale === language)
    .filter((topic) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        topic.name.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query)
      );
    }) ?? [];


  if (!topicList.length) {
    return (
      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-semibold mb-5">Topic Not Found</p>
        <p className="text-gray-600">The requested Topic category could not be found or has no questions.</p>

      </div>
    );
  }

  return (
    <section className="py-16 px-10 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Telusuri Semua Topik</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {topicList.map((topic, index) => (
          <TopicCard
            key={index}
            title={topic.name}
            description={topic.description}
            id={topic.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TopicList;