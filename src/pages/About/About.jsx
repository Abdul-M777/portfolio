import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Abdulmuaz Alshaikhli, a passionate Fullstack
                developer specializing in creating innovative web solutions and
                user-friendly interfaces. , I'm dedicated to simplifying
                development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier. Currently,
                I'm working on big projects with my friends.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a dedicated Fullstack developer with a strong focus on
                    learning and enhancing my expertise in web technologies.
                    Proficient in JavaScript, jQuery, PHP, Laravel, and database
                    management. Passionate about crafting responsive and
                    user-friendly digital solutions.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
