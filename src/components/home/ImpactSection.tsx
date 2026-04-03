import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const netPromoterScores = [
  { label: 'Overall Festival', value: 66, tone: 'bg-primary text-white border-primary' },
  { label: 'Jubilee Games', value: 74, tone: 'bg-white text-secondary border-slate-200' },
  { label: 'Jubilee Arts', value: 56, tone: 'bg-white text-secondary border-slate-200' },
  { label: 'Volunteering', value: 48, tone: 'bg-white text-secondary border-slate-200' },
];

const satisfactionRatings = [
  { label: 'Attendees', value: 4.59 },
  { label: 'Participants', value: 4.63 },
  { label: 'Volunteers', value: 4.58 },
];

const cohortRatings = [
  {
    title: 'Athletes',
    rows: [
      { label: 'Overall Experience', value: 4.4 },
      { label: 'Learning Experience', value: 4.1 },
      { label: 'Expanded Networks', value: 4.0 },
    ],
  },
  {
    title: 'Artists',
    rows: [
      { label: 'Overall Experience', value: 4.2 },
      { label: 'Continue Engagement', value: 4.7 },
      { label: 'Upskilled Expertise', value: 4.4 },
    ],
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center gap-1 text-guide-gold">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="h-5 w-5 fill-current" />
      ))}
      {halfStar && <Star className="h-5 w-5 fill-current opacity-60" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} className="h-5 w-5 fill-current text-slate-300" />
      ))}
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section
      id="net-promoter-section"
      className="scroll-mt-8 bg-slate-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-secondary md:text-5xl">
            Net Promoter Score
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Data from more than 5,000 surveys shows how strongly the Festival resonated across
            attendees, participants, artists, athletes, and volunteers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <h3 className="font-headline text-3xl font-bold text-primary">NPS Snapshot</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {netPromoterScores.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-6 text-center shadow-lg transition-transform hover:-translate-y-1 ${item.tone}`}
              >
                <p className="text-sm font-medium uppercase tracking-wider opacity-80">
                  {item.label}
                </p>
                <p className="mt-2 font-headline text-5xl font-extrabold">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <h3 className="font-headline text-3xl font-bold text-secondary">
              Overall Satisfaction
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {satisfactionRatings.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 font-headline text-4xl font-extrabold text-secondary">
                  {item.value.toFixed(2)}
                  <span className="ml-1 text-2xl text-slate-400">/5</span>
                </p>
                <div className="mt-3">
                  <StarRating rating={item.value} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {cohortRatings.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 text-center font-headline text-3xl font-bold text-secondary">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.rows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl bg-slate-50 px-5 py-4 text-center"
                  >
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                      {row.label}
                    </p>
                    <p className="mt-2 font-headline text-4xl font-extrabold text-secondary">
                      {row.value.toFixed(1)}
                      <span className="ml-1 text-2xl text-slate-400">/5</span>
                    </p>
                    <div className="mt-3">
                      <StarRating rating={row.value} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
