import { motion } from 'motion/react';

const overviewContent = {
  body:
    'To fulfill our potential as creatives or athletes is to realise a blessing. Sport and the arts are not only beautiful, they have a unique power to build bridges. Strangers who might not speak each other’s language can still come together to enjoy the same game of cricket or football and feel exactly the same passions. The poetry of great basketball, or volleyball, or wrestling is identical, whatever land you are from. And people who have different perspectives on almost everything can still fall under the same spell when they hear great music or see a beautiful piece of art.',
  quoteBy: 'His Highness Prince Rahim Aga Khan V',
  quoteRole: 'Opening Ceremony - Global Encounters Festival 2025',
};

export default function OverviewSection() {
  return (
    <section
      id="overview-section"
      className="relative overflow-hidden bg-[#FCFBF8] px-6 py-[6.25rem] md:py-[7.5rem]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-guide-light-blue/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div className="flex items-center justify-center px-8 lg:px-0">
            <img
              src="/GE_Festival_Signature_2025.png"
              alt="Global Encounters Festival 2025 Signature"
              className="w-full max-w-sm object-contain"
            />
          </div>

          <div className="relative text-center lg:text-left">
            <div className="absolute left-0 top-0 hidden h-full w-1.5 rounded-full bg-gradient-to-b from-secondary via-primary to-guide-light-blue lg:block" />
            <div className="lg:pl-8">
              <blockquote className="space-y-6">
                <p className="text-base leading-7 text-slate-600 md:text-[1.15rem] md:leading-8">
                  "{overviewContent.body}"
                </p>
                <footer className="flex flex-col items-center justify-center gap-4 border-t border-slate-200 pt-6 sm:flex-row lg:justify-start">
                  <div className="hidden h-px w-10 shrink-0 bg-gradient-to-r from-primary to-guide-light-blue sm:block" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                      {overviewContent.quoteBy}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{overviewContent.quoteRole}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
