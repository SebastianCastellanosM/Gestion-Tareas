import React from 'react';
import Image from 'next/image';
const Index = ({ image }: { image: string }) => {
  return (
    <div>
      <Image src={image} width={200} height={200} alt='Profile Picture Image' />
    </div>
  );
};

export default Index;
