import React from 'react';

interface Footnote {
  id: number;
  text: string;
}

interface FootnotesProps {
  footnotes: Footnote[];
}

const Footnotes: React.FC<FootnotesProps> = ({ footnotes }) => {
  return (
    <div className="text-xs text-slate-700 space-y-2">
      {footnotes.map((footnote) => (
        <div key={footnote.id} id={`footnote-${footnote.id}`} className="flex">
          <span className="mr-2">[{footnote.id}]</span>
          <p>{footnote.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Footnotes;
