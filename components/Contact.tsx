type Props = {
  dict: any;
};

export default function Contact({ dict }: Props) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            {dict.contact.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">{dict.contact.description}</p>

          <div className="mt-8 space-y-3 text-slate-700">
            <p><strong>Email:</strong> info@lexpartners.com</p>
            <p><strong>Phone:</strong> +49 30 12345678</p>
            <p><strong>Address:</strong> Berlin, Germany</p>
          </div>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder={dict.contact.form.name}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
            <input
              type="email"
              placeholder={dict.contact.form.email}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
            <textarea
              placeholder={dict.contact.form.message}
              rows={5}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
            <button
              type="submit"
              className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              {dict.contact.form.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
