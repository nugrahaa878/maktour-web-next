import React from 'react';
import Image from 'next/image';

interface TopicCardProps {
  icon: string;
  title: string;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TopicCard;