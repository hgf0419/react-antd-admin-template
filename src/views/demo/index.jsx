import React from 'react';
import { Card } from "antd";
import TypingCard from '@/components/TypingCard'
const Demo = () => {
  const cardContent = '这是演示页面 5 4 3 2 1'
  return (
    <div className="app-container">
      <TypingCard title='演示页面' source={cardContent} />
      <div>分割线</div>
      <Card bordered={false} className="card-item" title='演示页面'>
        <div>{cardContent}</div>
      </Card>
    </div>
  );
}

export default Demo;