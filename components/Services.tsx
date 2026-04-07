export default function Services() {
return ( <section id="services" className="py-24"> <div className="container-custom"> <div className="mb-14 max-w-3xl"> <span className="gold-badge mb-4">Services</span> <h2 className="section-title mb-5">
Professional support in two main areas </h2> <p className="section-text">
We offer out-of-court legal services in foreign law and structured
administrative support for immigration-related matters in Germany. </p> </div>

```
    <div className="grid gap-8 md:grid-cols-2">
      <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
          Foreign Law
        </div>

        <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
          Legal Services – Foreign Law
        </h3>

        <p className="mb-6 leading-8 text-slate-600">
          Out-of-court consultation, legal analysis, and document drafting
          focused on Afghan civil and administrative law under the RDG framework.
        </p>

        <a href="#contact" className="btn-primary">
          Learn More
        </a>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
          Administrative Support
        </div>

        <h3 className="mb-4 text-2xl font-extrabold text-slate-900">
          Immigration & Administrative Support
        </h3>

        <p className="mb-6 leading-8 text-slate-600">
          Assistance with forms, documents, organization, and procedural guidance.
          This service is fully administrative and non-legal.
        </p>

        <a href="#contact" className="btn-primary">
          Get Support
        </a>
      </div>
    </div>
  </div>
</section>

);
}
