import { DATA } from '@/data/resume';
import BlurFade from '@/components/magicui/blur-fade';
import { LinkList } from './_components/link-list';
import { Profile } from './_components/profile';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-lg shadow-xl overflow-hidden">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Profile
            name="Nestor Mamani"
            bio="programador construyendo cool shit | ai•software•startups"
            avatarUrl={DATA.avatarUrl}
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <LinkList />
        </BlurFade>
      </div>
    </main>
  );
}
