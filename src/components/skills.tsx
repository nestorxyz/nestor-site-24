import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { DATA } from '@/data/resume';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

export function Skills() {
  // Define the specific icons for each category header
  const categoryIcons: Record<string, React.ReactNode[]> = {
    'Core Stack': [
      <Icons.react key="react" className="size-8" />,
      <Icons.nextjs key="nextjs" className="size-8" />,
      <Icons.typescript key="ts" className="size-8" />,
      <Icons.nodejs key="node" className="size-8" />,
    ],
    'AI Stack': [
      <Icons.langgraph key="langgraph" className="size-8" />,
      <Icons.vercel key="vercel" className="size-8" />, // Using Vercel for Vercel AI SDK
      <Icons.gemini key="gemini" className="size-8" />,
      <Icons.openai key="openai" className="size-8" />,
    ],
    'Infra & Tools': [
      <Icons.aws key="aws" className="size-8" />,
      <Icons.docker key="docker" className="size-8" />,
      <Icons.supabase key="supabase" className="size-8" />,
      <Icons.whatsapp key="whatsapp" className="size-8" />,
    ],
  };

  const categories = Object.entries(DATA.skills).map(([title, skills]) => ({
    title,
    skills,
    icons: categoryIcons[title] || [], // Fallback if name mismatch
  }));

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <BlurFade
              key={category.title}
              delay={BLUR_FADE_DELAY * 10 + index * 0.05}
            >
              <Card className="flex flex-col h-full bg-card/50 !border p-4">
                <CardHeader>
                  <div className="flex gap-4 mb-2">
                    {category.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="bg-background p-2 rounded-md border text-foreground/80"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  <CardTitle className="text-base">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-[6px] mt-2">
                    {category.skills.map((skill, id) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-[12px] px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
