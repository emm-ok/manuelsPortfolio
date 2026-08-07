import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Code2,
  Target,
  Lightbulb,
  Layers3,
  Wrench,
} from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        onClick={onClose}
      >

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease:[0.22,1,0.36,1] }}
          onClick={(e)=>e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-white shadow-2xl"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 rounded-full bg-black/40 p-2 hover:bg-primary hover:text-black transition"
          >
            <X size={20}/>
          </button>


          {/* HERO IMAGE */}

          <div className="relative h-[320px] overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent"/>


            <div className="absolute bottom-8 left-8">

              <span className="text-primary text-sm uppercase tracking-widest">
                {project.category}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                {project.title}
              </h2>

            </div>

          </div>



          {/* CONTENT */}

          <div className="p-8 md:p-12 space-y-12">


            {/* OVERVIEW */}

            <section>

              <SectionTitle
                icon={<Target size={20}/>}
                title="Project Overview"
              />

              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>

            </section>




            {/* ROLE */}

            <section>

              <SectionTitle
                icon={<Code2 size={20}/>}
                title="My Role"
              />

              <p className="text-muted-foreground leading-relaxed">
                {project.role}
              </p>

            </section>




            {/* PROBLEM + SOLUTION */}

            <div className="grid md:grid-cols-2 gap-8">


              <InfoCard
                title="Problem"
                icon={<Target size={18}/>}
                text={project.problem}
              />


              <InfoCard
                title="Solution"
                icon={<Lightbulb size={18}/>}
                text={project.solution}
              />


            </div>




            {/* FEATURES */}

            <section>

              <SectionTitle
                icon={<CheckCircle2 size={20}/>}
                title="Key Features"
              />


              <div className="grid md:grid-cols-2 gap-4 mt-5">

                {project.features.map((feature)=>(
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-primary mt-1"
                    />

                    <span>
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

            </section>





            {/* ARCHITECTURE */}

            <section>

              <SectionTitle
                icon={<Layers3 size={20}/>}
                title="Technical Architecture"
              />


              <div className="flex flex-wrap gap-3 mt-5">

                {project.architecture.map((item)=>(
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </section>





            {/* CHALLENGES */}

            <section>

              <SectionTitle
                icon={<Wrench size={20}/>}
                title="Engineering Challenges"
              />


              <ul className="mt-5 space-y-3">

                {project.challenges.map((challenge)=>(
                  <li
                    key={challenge}
                    className="flex gap-3 text-muted-foreground"
                  >

                    <span className="text-primary">
                      •
                    </span>

                    {challenge}

                  </li>
                ))}

              </ul>


            </section>





            {/* STACK */}

            <section>

              <SectionTitle
                icon={<Code2 size={20}/>}
                title="Technology Stack"
              />


              <div className="flex flex-wrap gap-3 mt-5">

                {project.technologies.map((tech)=>(
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition"
                  >
                    {tech}
                  </span>
                ))}


              </div>


            </section>




            {/* ACTIONS */}

            <div className="flex flex-wrap gap-4 pt-5 border-t border-border">


              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  className="px-6 py-3 rounded-xl border border-border flex items-center gap-2 hover:bg-primary hover:text-black transition"
                >

                  <Github size={18}/>
                  View Source

                </a>

              )}



              {project.demo && (

                <a
                  href={project.demo}
                  target="_blank"
                  className="cosmic-button flex items-center gap-2"
                >

                  <ExternalLink size={18}/>
                  Live Demo

                </a>

              )}


            </div>


          </div>


        </motion.div>


      </motion.div>
    </AnimatePresence>
  );
}



function SectionTitle({icon,title}) {
  return (
    <div className="flex items-center gap-3 mb-4">

      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

    </div>
  );
}



function InfoCard({title,icon,text}) {
  return (
    <div className="rounded-2xl border border-border p-6 bg-secondary/20">

      <div className="flex items-center gap-2 mb-3 text-primary">

        {icon}

        <h4 className="font-semibold">
          {title}
        </h4>

      </div>


      <p className="text-muted-foreground leading-relaxed">
        {text}
      </p>


    </div>
  );
}


export default ProjectModal;