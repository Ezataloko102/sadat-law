type Props = {
  dict: any;
};

export default function About({ dict }: Props) {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {dict.about.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{dict.about.title}</h2>
          <p className="mt-5 leading-8 text-slate-300">{dict.about.description}</p>
        </div>

        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {dict.about.points.map((point: string) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-medium text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
