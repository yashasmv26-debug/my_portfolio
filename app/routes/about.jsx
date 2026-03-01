import { Profile } from './home/profile';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'About',
    description: 'Learn more about me, my interests and background.',
  });
};

export default function About() {
  return <Profile id="profile" visible />;
}
