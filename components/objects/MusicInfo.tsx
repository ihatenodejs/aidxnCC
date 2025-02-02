import React from 'react';
import Button from './Button';

interface TimePeriod {
  title: string;
  slug: string;
}

const timePeriods: TimePeriod[] = [
  { title: 'Late Summer 2024', slug: 'late-summer-2024' },
  { title: 'Early Summer 2024', slug: 'early-summer-2024' },
];

const MusicInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center text-gray-200">
      {timePeriods.map((period) => (
        <section key={period.slug} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{period.title}</h2>
          <div className="flex justify-center">
            <Button 
              href={`/time-periods/${period.slug}/what-was-going-on`}
              label="WHAT WAS GOING ON"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default MusicInfo;

