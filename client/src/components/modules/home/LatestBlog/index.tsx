import CustomBadge from '@/components/ui/core/CustomBadge';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readMoreLink: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Top 5 groundbreaking medical advancements transforming...',
    excerpt:
      'Smoke from regional wildfires endangers health even for those not directly in the path of fire. As wildfires...',
    category: 'Exercise & Fitness',
    date: 'February 24, 2025',
    author: 'Admin',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    readMoreLink: '#',
  },
  {
    id: 2,
    title:
      'Mental health: Breaking the stigma and promoting emotional well-being',
    excerpt:
      'Smoke from regional wildfires endangers health even for those not directly in the path of fire. As wildfires...',
    category: 'Neurologist',
    date: 'February 24, 2025',
    author: 'Admin',
    image:
      'https://plus.unsplash.com/premium_photo-1673953510199-321e05bf6440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    readMoreLink: '#',
  },
  {
    id: 3,
    title: 'Natural ways to strengthen your immune system for optimal health',
    excerpt:
      'Smoke from regional wildfires endangers health even for those not directly in the path of fire. As wildfires...',
    category: 'Nutrition',
    date: 'February 24, 2025',
    author: 'Admin',
    image:
      'https://images.unsplash.com/photo-1631980839320-77eed020776c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    readMoreLink: '#',
  },
];

const LatestBlog = () => {
  return (
    <div className='max-w-7xl mx-auto text-heading'>
      <div className='text-center mb-12'>
        <div className='flex justify-center'>
          <CustomBadge text='Latest Article' />
        </div>
        <h2 className='text-4xl md:text-5xl font-bold  mb-4'>
          Latest health news and
          <br />
          expert advice
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {articles.map((article) => (
          <div key={article.id} className=''>
            <div className='aspect-video overflow-hidden'>
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={500}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>

            <div className='mt-6'>
              <div className='flex items-center justify-between text-sm mb-4 text-color'>
                <span className='text-primary font-medium'>
                  • {article.category}
                </span>
                <div className='flex items-center space-x-4'>
                  <span>{article.date}</span>
                  <span>
                    By{' '}
                    <span className='font-medium text-heading'>
                      {article.author}
                    </span>
                  </span>
                </div>
              </div>

              <h3 className='text-xl text-heading font-bold mb-3 leading-tight'>
                {article.title}
              </h3>

              <p className='text-sm mb-6 leading-relaxed text-color'>
                {article.excerpt}
              </p>

              <a
                href={article.readMoreLink}
                className='group relative inline-flex items-center font-medium transition-all duration-300 pl-1 pr-4 py-1'
              >
                {/* Icon */}
                <span className='w-6 h-6 rounded-full flex items-center justify-center mr-3 z-10 relative overflow-hidden'>
                  {/* Default Icon: ChevronRight */}
                  <ChevronRight className='w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0' />

                  {/* Hover Icon: ArrowRight */}
                  <ArrowRight className='w-4 h-4 ml-1 text-white absolute top-1/2 left-1/2 -translate-x-[150%] -translate-y-1/2 group-hover:translate-x-[-50%] group-hover:opacity-100 opacity-0 transition-all duration-500' />
                </span>

                {/* Text */}
                <span className='text-sm relative z-10 text-primary group-hover:text-white transition-colors duration-500'>
                  Read More
                </span>

                {/* Background Strip */}
                <span className='absolute left-0 top-0 h-full w-8 bg-primary rounded-full z-0 transition-all duration-700 ease-out group-hover:w-full'></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;