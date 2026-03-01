import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import meImg from '~/assets/me.jpeg';
import logoC from '~/assets/c.jpg';
import logoHtml from '~/assets/html.jpg';
import logoCss from '~/assets/css.jpg';
import logoJs from '~/assets/js.jpg';
import logoSb from '~/assets/sb.jpg';
import logoJava from '~/assets/java.png';
import logoPython from '~/assets/python.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';

import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi, I am Yashas MV." start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am a Computer Science Engineering student focused on mastering core fundamentals and building intelligent, scalable systems. My interests lie in Data Structures, backend architecture, and artificial intelligence, with a strong ambition to grow into an AI-driven Software Engineer.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Beyond tech, I enjoy gaming, participating in online coding challenges, and travelling to explore new places and perspectives.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact me
              </Button>

              <div className={styles.techLogos} data-visible={visible}>
                <div className={styles.logo}><img src={logoC} alt="C logo" /></div>
                <div className={styles.logo}><img src={logoHtml} alt="HTML logo" /></div>
                <div className={styles.logo}><img src={logoCss} alt="CSS logo" /></div>
                <div className={styles.logo}><img src={logoJs} alt="JavaScript logo" /></div>
                <div className={styles.logo}><img src={logoSb} alt="Storybook logo" /></div>
                <div className={styles.logo}><img src={logoJava} alt="Java logo" /></div>
                <div className={styles.logo}><img src={logoPython} alt="Python logo" /></div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={meImg}
                  srcSet={`${meImg} 480w, ${meImg} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Yashas MV"
                />
                <div className={styles.tagTextVertical} data-visible={visible}>
                  ヤシャス
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
