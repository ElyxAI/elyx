import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap | Elyx AI',
  description: 'Our journey and future plans for Elyx AI',
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 