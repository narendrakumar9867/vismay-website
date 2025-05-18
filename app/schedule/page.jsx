export const metadata = {
  title: "schedule|Vismay",
  description:
    "Relive the magic of Vismay at GMCMirag—explore unforgettable moments...",
  keywords:
    "Vismay, GMCMiraj, Cultural Fest, Dance, Drama, Music, Art, Celebration, ...",
  openGraph: {
    title: "schedule|Vismay",
    description:
      "Relive the magic of Vismay at GMCMirag—explore unforgettable moments...",
    url: "https://vismaygmcmiraj.in/schedule",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

import ScheduleClient from './ScheduleClient';

export default function SchedulePage() {
  return <ScheduleClient />;
}
