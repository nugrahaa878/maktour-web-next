'use client';

import { FC } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
  { name: 'John Doe Situmorang', role: 'Agen Bandung' },
];

const MeetThePeople: FC = () => {
  return (
    <section className="py-12 md:py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-12 abhaya-libre">
          Meet the People
        </h2>
        <div className="flex overflow-x-auto pb-6 md:pb-0 gap-6 md:gap-20 md:flex-wrap md:justify-center items-center scrollbar-hide">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-none md:flex-auto flex flex-col items-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-200 overflow-hidden mb-4">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetThePeople;