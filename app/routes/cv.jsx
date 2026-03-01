import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { Fragment, useEffect } from 'react';
import { json } from '@remix-run/cloudflare';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import profileImg from '~/assets/profile.jpg';
import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import styles from '~/styles/cv.module.css';

export const meta = () => {
  return [
    { title: 'Yashas MV | CV' },
    {
      name: 'description',
      content: 'Curriculum Vitae of Yashas MV - Engineering Student at ENSEEIHT Toulouse',
    },
  ];
};

const cvData = {
  personalInfo: {
    name: 'Yashas MV',
    title: 'Engineering Student',
    disciplines: ['Machine Learning', 'Mathematics', 'Philosophy'],
    email: 'yashasmv26@gmail.com',
    linkedin: 'linkedin.com/in/yashas-mv-94a534291',
    location: 'Toulouse, France',
  },
  education: [
    {
      degree: 'Engineering Degree in Digital Sciences (SN)',
      institution: 'ENSEEIHT Toulouse',
      period: '2023 - Present',
      description: 'Specializing in Machine Learning and Applied Mathematics',
      achievements: [
        'Focus on AI, Deep Learning, and Software Engineering',
        'Active member of Genius7 entrepreneurship association',
      ],
    },
    {
      degree: 'Preparatory Classes (CPGE MPI)',
      institution: 'Lycée Franklin Roosevelt, Reims',
      period: '2021 - 2023',
      description: 'Mathematics, Physics, and Computer Science',
      achievements: ['Intensive mathematics and physics curriculum'],
    },
  ],
  experience: [
    {
      title: 'AI-Powered Personalized Gift Application',
      organization: 'Entrepreneurial Project',
      period: '2024 - Present',
      description: 'Innovative application transforming memories into interactive narrative experiences',
      achievements: [
        'AI-powered chatbot generating unique stories from photos and videos',
        'Dual format (digital & physical) with gamification features',
        'Full-stack development with React and modern ML frameworks',
        'MVP in development with business model validation',
      ],
    },
    {
      title: 'Discord Bot for Study Sessions',
      organization: 'Personal Project',
      period: '2022 - 2023',
      description: 'Custom Discord bot for collaborative study management',
      achievements: [
        'Automated session organization for preparatory class students',
        'Built with Python to enhance team productivity',
      ],
    },
    {
      title: 'Student Leadership Activities',
      organization: 'High School',
      period: '2019 - 2021',
      description: 'Multiple leadership roles in student organizations',
      achievements: [
        'Manager of the Journalism Club',
        'Music Coordinator for ETM (Every Talent Matters) event',
        'DJ for First-Year Prom',
      ],
    },
  ],
  interests: [
    'Machine Learning & AI',
    'Mathematics',
    'Philosophy',
    'Entrepreneurship & Innovation',
    'Music & DJing',
  ],
};

export async function loader() {
  return json({ cvData });
}

export default function CV() {
  const { cvData } = useLoaderData();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('print') === 'true') {
      const timer = setTimeout(() => {
        window.print();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className={styles.cv}>
      <Section className={styles.header}>
        <Transition in timeout={0}>
          {({ visible, nodeRef }) => (
            <header ref={nodeRef} className={styles.headerContent}>
              <div className={styles.headerText}>
                <Heading level={1} weight="bold">
                  <DecoderText text={cvData.personalInfo.name} delay={300} />
                </Heading>
                <Heading level={2} as="p" className={styles.subtitle}>
                  {cvData.personalInfo.disciplines.join(' • ')}
                </Heading>
                <div className={styles.contact}>
                  <Text size="s">{cvData.personalInfo.email}</Text>
                  <Text size="s">{cvData.personalInfo.linkedin}</Text>
                  <Text size="s">{cvData.personalInfo.location}</Text>
                </div>
              </div>
              <div className={styles.headerImage}>
                <Image
                  src={profileImg}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={240}
                  height={240}
                  placeholder={profileImgPlaceholder}
                  alt="Yashas MV in New York"
                  className={styles.profileImage}
                />
              </div>
            </header>
          )}
        </Transition>
      </Section>

      <Divider />

      <Section className={styles.section}>
        <Heading level={2} className={styles.sectionHeading}>
          Education
        </Heading>
        {cvData.education.map((edu, index) => (
          <Fragment key={index}>
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <Heading level={3} className={styles.entryTitle}>
                  {edu.degree}
                </Heading>
                <Text size="s" className={styles.entryPeriod}>
                  {edu.period}
                </Text>
              </div>
              <Text size="m" weight="medium" className={styles.entryInstitution}>
                {edu.institution}
              </Text>
              <Text size="s" className={styles.entryDescription}>
                {edu.description}
              </Text>
              {edu.achievements && (
                <ul className={styles.entryList}>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>
                      <Text size="s">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {index < cvData.education.length - 1 && <Divider className={styles.entryDivider} />}
          </Fragment>
        ))}
      </Section>

      <Divider />

      <Section className={styles.section}>
        <Heading level={2} className={styles.sectionHeading}>
          Experience
        </Heading>
        {cvData.experience.map((exp, index) => (
          <Fragment key={index}>
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <Heading level={3} className={styles.entryTitle}>
                  {exp.title}
                </Heading>
                <Text size="s" className={styles.entryPeriod}>
                  {exp.period}
                </Text>
              </div>
              <Text size="m" weight="medium" className={styles.entryInstitution}>
                {exp.organization}
              </Text>
              <Text size="s" className={styles.entryDescription}>
                {exp.description}
              </Text>
              {exp.achievements && (
                <ul className={styles.entryList}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <Text size="s">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {index < cvData.experience.length - 1 && <Divider className={styles.entryDivider} />}
          </Fragment>
        ))}
      </Section>


      <Divider />

      <Section className={styles.section}>
        <Heading level={2} className={styles.sectionHeading}>
          Interests
        </Heading>
        <Text size="m">{cvData.interests.join(' • ')}</Text>
      </Section>

      <Section className={styles.actions}>
        <Button
          secondary
          iconHoverShift
          icon="arrowLeft"
          href="/"
        >
          Back to Portfolio
        </Button>
      </Section>

      <Footer />
    </div>
  );
}
