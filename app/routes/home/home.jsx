import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { ProjectSummary } from './project-summary';
import { Profile } from './profile';
import { Contact } from '../contact/contact';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// project screenshot assets
import collegeImg from '~/assets/college-portal.png';
import collegeImgLarge from '~/assets/college-portal-large.png';
import collegeImgPlaceholder from '~/assets/college-portal-placeholder.png';
import portfolioImg from '~/assets/portfolio-workshop.png';
import portfolioImgLarge from '~/assets/portfolio-workshop-large.png';
import portfolioImgPlaceholder from '~/assets/portfolio-workshop-placeholder.png';
import portfolioScreen from '~/assets/portfolio.png';
import screenImg from '~/assets/image.png';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Étudiant Ingénieur en Sciences du Numérique',
    description: `Portfolio d'${config.name} — Étudiant ingénieur à l'ENSEEIHT, passionné par le Machine Learning et l'Intelligence Artificielle.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const profile = useRef();
  const college = useRef();
  const portfolio = useRef();
  const contactSection = useRef();

  useEffect(() => {
    const sections = [intro, profile, college, portfolio, contactSection];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        id="profile"
        sectionRef={profile}
        visible={visibleSections.includes(profile.current)}
      />

      <ProjectSummary
        id="college-management"
        sectionRef={college}
        visible={visibleSections.includes(college.current)}
        title="COLLEGE MANAGEMENT website"
        description="College Management System powered by AI, designed to solve real-time challenges faced by students, faculty, and administrators. Features include AI-driven attendance tracking, smart timetable generation, automated grading, and personalized learning paths to enhance the educational experience."
        buttonText="View Project"
        buttonLink="https://vvce.great-site.net/"
        model={{
          type: 'laptop',
          alt: 'College Management System',
          textures: [
            {
              // primary texture used by laptop model
              srcSet: `${screenImg} 800w, ${screenImg} 1920w`,
              placeholder: screenImg,
            },
            {
              // secondary fallback image
              srcSet: `${collegeImg} 800w, ${collegeImgLarge} 1920w`,
              placeholder: collegeImgPlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="portfolio-project"
        sectionRef={portfolio}
        visible={visibleSections.includes(portfolio.current)}
        title="PORTFOLIO"
        description="Personal portfolio built in the workshop"
        buttonText="View Project"
        buttonLink="#"
        model={{
          type: 'laptop',
          alt: 'Workshop Portfolio',
          textures: [
            {
              // show the actual portfolio screenshot on the laptop
              srcSet: `${portfolioScreen} 800w, ${portfolioScreen} 1920w`,
              placeholder: portfolioScreen,
            },
            {
              // fallback portfolio workshop image
              srcSet: `${portfolioImg} 800w, ${portfolioImgLarge} 1920w`,
              placeholder: portfolioImgPlaceholder,
            },
          ],
        }}
      />

      <Contact id="contact" sectionRef={contactSection} />

      <Footer />
    </div>
  );
};