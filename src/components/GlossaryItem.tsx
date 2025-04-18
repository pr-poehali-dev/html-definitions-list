import React from 'react';
import { Card } from '@/components/ui/card';

interface GlossaryItemProps {
  title: string;
  description: string;
}

const GlossaryItem: React.FC<GlossaryItemProps> = ({ title, description }) => {
  // Заменяем [номер] в тексте на верхний индекс со ссылкой
  const formattedDescription = description.replace(
    /\[(\d+)\]/g, 
    (_, number) => `<sup><a href="#footnote-${number}" class="text-blue-700">[${number}]</a></sup>`
  );

  return (
    <div className="glossary-item">
      <div className="bg-teal-800 text-white font-semibold py-2 px-4">
        {title}
      </div>
      <Card className="p-4 bg-slate-50 border-none shadow-sm">
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="text-sm leading-relaxed text-slate-800" />
      </Card>
    </div>
  );
};

export default GlossaryItem;
