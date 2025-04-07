import TopicCard from '../TopicCard';

const topics = [
  {
    icon: '/assets/icons/info.svg',
    title: 'General Information',
    description: 'Informasi umum tentang layanan dan produk kami',
  },
  {
    icon: '/assets/icons/document.svg',
    title: 'Visa & Documentation',
    description: 'Panduan lengkap tentang visa dan dokumen perjalanan',
  },
  {
    icon: '/assets/icons/payment.svg',
    title: 'Pricing & Payment',
    description: 'Informasi harga dan metode pembayaran yang tersedia',
  },
  {
    icon: '/assets/icons/health.svg',
    title: 'Health & Safety',
    description: 'Panduan kesehatan dan keselamatan selama perjalanan',
  },
  {
    icon: '/assets/icons/guide.svg',
    title: 'Guidance & Services',
    description: 'Layanan bimbingan dan bantuan yang kami sediakan',
  },
  {
    icon: '/assets/icons/question.svg',
    title: 'Other Common Questions',
    description: 'Pertanyaan umum lainnya yang sering ditanyakan',
  },
];

const TopicList = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Telusuri Semua Topik</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TopicList;