
import { ContactForm } from '../components'

function Contect() {
  return (
    <>
      <div className=" container md:px-44">
        <ContactPage />
      </div>
    </>
  )
}


function ContactPage() {
  const contactInfos = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f16c068778c5a191dedc4ba1be13fd7f5e9ac9ed99313fe6c60ce18309162c3d?apiKey=1c15e4263ea04cadbb20c639335d52ba&",
      alt: "Phone Icon",
      contactDetail: "+1012 3456 789",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bb1a00599dfe74e727d473bbea3f82a4256d12f46e2e2e0d646224abcead9f2?apiKey=1c15e4263ea04cadbb20c639335d52ba&",
      alt: "Email Icon",
      contactDetail: "demo@gmail.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0023f0b174d7beaa6019ec381ca967db191e64dd7460b10dc4d5a7264453c043?apiKey=1c15e4263ea04cadbb20c639335d52ba&",
      alt: "Location Icon",
      contactDetail: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    },
  ];

  return (
    <main className="flex flex-col items-center px-11 py-12 bg-zinc-50 max-md:px-5">
      <header>
        <h1 className="mt-7 text-4xl font-bold text-black whitespace-nowrap">
          Contact Us
        </h1>
      </header>
      <p className="mt-14 text-lg font-medium text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
        Any question or remarks? Just write us a message!
      </p>
      <section className="self-stretch px-3.5 py-2.5 mt-8 shadow-2xl bg-zinc-300 rounded-[50px_0px] max-md:max-w-full">
        <article className="flex  max-md:flex-col max-md:gap-0 rounded-[50px_0px] overflow-hidden ">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className=" relative flex flex-col grow px-10 py-12 w-full text-base bg-zinc-800 text-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className=" absolute bottom-24 right-20 h-28 w-28 rounded-full bg-[#484848]/30"></div>
              <h2 className="text-3xl font-semibold">Contact Information</h2>
              <p className="mt-6 text-lg text-stone-300">
                Say something to start a live chat!
              </p>
              <div className="mt-20">

              {contactInfos.map((info) => (
                <ContactInfo
                  key={info.contactDetail}
                  icon={info.icon}
                  alt={info.alt}
                  contactDetail={info.contactDetail}
                />
              ))}
              </div>
            </div>
            
          </div>
          <div className="flex flex-col pl-5 w-[57%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
        </article>
      </section>
    </main>
  );
}

function ContactInfo({ icon, alt, contactDetail }) {
  return (
    <div className="flex gap-3 justify-between self-start mt-3  max-md:mt-10">
      <img loading="lazy" src={icon} alt={alt} className="w-6 aspect-square" />
      <div className="flex-auto my-auto">{contactDetail}</div>
    </div>
  );
}


export default Contect