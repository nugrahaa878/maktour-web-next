import React from 'react';
import Image from 'next/image';
import hajjPerson from '../../../public/assets/icons/hajj-person.png';
import { useRouter } from 'next/navigation';

interface TopicCardProps {
  title: string;
  description: string;
  id: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/help/${id}`);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onClick={handleClick}>
      <div className="w-12 h-12 mb-4">
        <Image src={hajjPerson} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TopicCard;