import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "U Ba",
      role: "CEO, ABC Co.",
      text: "One Tech MM ရဲ့ ဝန်ဆောင်မှုက မြန်ဆန်ပြီး အရည်အသွေး အရမ်းကောင်းပါတယ်။",
    },
    {
      name: "Daw Su",
      role: "Founder, Fashion Hub",
      text: "ကျွန်မတို့ရဲ့ Website ကို စိတ်တိုင်းကျ ဖန်တီးပေးလို့ ကျေးဇူးအများကြီးတင်ပါတယ်။",
    },
  ];

  return (
    <section className="py-16 px-6 bg-main">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 italic uppercase">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-8 bg-[#f2f2f2] rounded-3xl relative italic"
            >
              <span className="text-6xl text-team-name absolute top-2 left-4 opacity-20">
                “
              </span>
              <p className="text-gray-600 relative z-10 mb-4">{r.text}</p>
              <h4 className="font-bold text-blue-600">{r.name}</h4>
              <p className="text-xs text-gray-400 font-bold uppercase">
                {r.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
