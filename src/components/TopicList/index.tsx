'use client'

import { useGetFaqCategory } from '@/hooks/useGetFaqCategory';
import TopicCard from '../TopicCard';
import { useLanguage } from '@/context/LanguageContext';

const TopicList = () => {
  const { language } = useLanguage();
  const { data, error, isLoading } = useGetFaqCategory();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center">Loading Help Category...</p>
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

  const topicList = data?.data.filter((topic) => topic.locale === language) ?? [];

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