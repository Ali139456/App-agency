import type { Metadata } from 'next';
import { CaseStudy } from '@/components/CaseStudy';

export const metadata: Metadata = {
  title: 'Food ordering system — App Studio',
  description:
    'Case study of a food ordering system: customer app, rider hub, and store desk, with cash, Easypaisa, and JazzCash checkout.',
};

export default function FoodOrderingCaseStudy() {
  return <CaseStudy />;
}
