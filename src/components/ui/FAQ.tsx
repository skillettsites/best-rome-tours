import { displayFaqs } from '@/lib/currency';
import { FAQ as FAQType } from '@/lib/types';
import FAQClient from './FAQClient';

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQType[]; title?: string }) {
  return <FAQClient faqs={displayFaqs(faqs)} title={title} />;
}
