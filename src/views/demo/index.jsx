import React from 'react';
import TypingCard from '@/components/TypingCard'
const Demo = () => {
  const cardContent = '这是演示页面 5 4 3 2 1'
  return (
    <div className="app-container">
      <TypingCard title='演示页面' source={cardContent}/>
    </div>
  );
}

export default Demo;