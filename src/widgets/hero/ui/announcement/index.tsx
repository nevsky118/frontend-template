import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Separator } from '@ui/separator';
import { Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Announcement = () => {
  return (
    <Link
      to="#"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Blocks className="h-4 w-4" /> <Separator className="mx-2 h-4" orientation="vertical" />{' '}
      <span>Introducing Lift Mode</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
};
