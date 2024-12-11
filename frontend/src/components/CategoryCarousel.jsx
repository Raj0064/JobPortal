import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category=[
  "Frontend Developer",
  "Data Science",
  "Backend Developer",
  "Graphic Designer",
  "FullStack Developer"
]

const CategoryCarousel = () => {

  return (
    <div className='flex items-center justify-center'>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent >
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline">
                {cat}
              </Button>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;