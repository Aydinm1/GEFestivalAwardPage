export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-10 md:block">
        <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div className="relative w-full lg:w-1/2">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-3xl transition-all group-hover:bg-primary/30" />
            <img
              alt="Excellence in Action"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover grayscale-[20%] transition-all duration-1000 hover:grayscale-0 shadow-3xl"
              src="/impact-image.jpeg"
              onError={(event) => {
                (event.target as HTMLImageElement).src =
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDk8ZIzKYL_1frPuMJq9AiU0XY1_p_8lGJJcTv1UUu5ph04qPCN9nvzDXwkxe4hPVkp2xt9amLdr1Ol72ZfiUZUJF5whDC002Rao8oQmU_wcnjsKuT89y-dw_v60WbcuP2FyfyjKVs_Jhs-ptqAVpDK2czBFcGn6YOmt0to5lVGD5w6m6H35LvkKZm92Qo6hXTQLS7A4RllcfRqdR65pOwmPwh6JKM03MFjfi6OHzap2v7vUlRNuFqw8FOGlNmFWD4iT-p0pp9BzCXe';
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="w-full space-y-8 md:space-y-10 lg:w-1/2">
          <div className="inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 md:text-xs">
            Our Global Vision
          </div>
          <h2 className="font-headline text-3xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Redefining Unity Through Excellence.
          </h2>
          <p className="text-lg font-light leading-relaxed text-slate-300 md:text-xl">
            Global Encounters is more than a festival; it is a biennial commitment to the
            elevation of the human spirit. Our mission is to bridge geographic and socio-economic
            divides by creating a platform where elite talent meets grassroots impact.
          </p>
          <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:py-6">
            <div>
              <h4 className="mb-2 text-lg font-bold text-primary">Sustainable Legacy</h4>
              <p className="text-sm text-slate-400">
                Carbon-neutral operations with lasting infrastructure for host cities.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-primary">Elite Competition</h4>
              <p className="text-sm text-slate-400">
                Sanctioned sporting events featuring world-class officiating and talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
