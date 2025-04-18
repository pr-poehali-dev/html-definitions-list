import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import GlossaryItem from '@/components/GlossaryItem';
import Footnotes from '@/components/Footnotes';

const GlossaryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Технический глоссарий</h1>
      
      <div className="space-y-6">
        <GlossaryItem 
          title="TAG" 
          description="In information systems, a tag is a keyword or term assigned to a piece of information (such as an Internet bookmark, digital image, database record, or computer file). This kind of metadata helps describe an item and allows it to be found again by browsing or searching.[1] Tags are generally chosen informally and personally by the item's creator or by its viewer, depending on the system, although they may also be chosen from a controlled vocabulary."
        />
        
        <GlossaryItem 
          title="ATTRIBUTE" 
          description="HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an HTML element type. An attribute either modifies the default functionality of an element type or provides functionality to certain element types unable to function correctly without them. In HTML syntax, an attribute is added to an HTML start tag."
        />
        
        <GlossaryItem 
          title="ELEMENT" 
          description="An HTML element is an individual component of an HTML (Hypertext Markup Language) document or web page.[vague] HTML is composed of a tree of HTML nodes, such as text nodes. Each node can have HTML attributes specified. Nodes can also have content, including other nodes and text. Many HTML nodes represent semantics, or meaning. For example, the <title> node represents the title of the document."
        />
      </div>
      
      <Separator className="my-8" />
      
      <Footnotes footnotes={[
        {
          id: 1,
          text: "Smith, Gene. (2008). "Tagging: People-powered Metadata for the Social Web". Berkeley: New Riders Press. ISBN 9780321529176; OCLC 154806677."
        },
        {
          id: 2,
          text: "Some argue, however, see 'tags' not as metadata but as "just more content". Berendt, Bettina; Hanser, Christoph (2007). "Tags are not metadata, but 'just more content'—to some people" (PDF). Proceedings of the International Conference on Weblogs and Social Media (ICWSM). Boulder, Colorado, USA. March 26–28, 2007. Menlo Park, CA: International AAAI Conference on Artificial Intelligence. OCLC 799133393."
        }
      ]} />
    </div>
  );
};

export default GlossaryPage;
