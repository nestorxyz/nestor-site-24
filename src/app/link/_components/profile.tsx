import Image from 'next/image';

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl: string;
}

export function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="text-center p-6 ">
      <Image
        src={avatarUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-full mx-auto mb-4 border-4 border-purple-600"
      />
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  );
}
