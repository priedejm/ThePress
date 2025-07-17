import React from 'react';
import { Card, CardBody, Button, Link } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}

export const InstagramFeed: React.FC = () => {
  const instagramPosts: InstagramPost[] = [
    {
      id: "post1",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=10",
      likes: 124,
      comments: 18,
      caption: "Our signature Classic Press burrito - perfectly crispy on the outside, packed with flavor inside! #ThePress #PressedBurritos"
    },
    {
      id: "post2",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=11",
      likes: 98,
      comments: 12,
      caption: "Spicy Chipotle Press - for those who like it HOT! 🔥 #SpicyFood #BurritoLove"
    },
    {
      id: "post3",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=12",
      likes: 156,
      comments: 24,
      caption: "Fresh ingredients make all the difference. This is how we prep for the day! #FreshIngredients #BehindTheScenes"
    },
    {
      id: "post4",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=13",
      likes: 203,
      comments: 31,
      caption: "The perfect press - watch the cheese melt! 🧀 #CheeseLovers #BurritoTechnique"
    },
    {
      id: "post5",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=14",
      likes: 87,
      comments: 9,
      caption: "Veggie lovers rejoice! Our Garden Press burrito is packed with fresh veggies and flavor. #VegetarianFood #HealthyEating"
    },
    {
      id: "post6",
      image: "https://img.heroui.chat/image/food?w=600&h=600&u=15",
      likes: 142,
      comments: 22,
      caption: "Breakfast of champions! Start your day with our Breakfast Press burrito. #BreakfastBurrito #MorningFuel"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="instagram" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon icon="lucide:instagram" className="text-2xl text-foreground" />
          <p className="text-lg font-medium">@thepresschs</p>
        </div>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Follow us on Instagram for mouthwatering photos, behind-the-scenes content, and special announcements.
        </p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {instagramPosts.map((post) => (
          <motion.div key={post.id} variants={item}>
            <Card className="overflow-hidden">
              <div className="relative group">
                <img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <div className="flex justify-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:heart" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:message-circle" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-sm line-clamp-3">{post.caption}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-8 text-center">
        <Button 
          as={Link} 
          href="https://instagram.com" 
          target="_blank" 
          color="primary" 
          variant="flat"
          startContent={<Icon icon="lucide:instagram" />}
        >
          View More on Instagram
        </Button>
      </div>
    </section>
  );
};