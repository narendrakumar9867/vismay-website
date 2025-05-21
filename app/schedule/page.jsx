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
      "https://res.cloudinary.com/dk1jk0yxz/image/upload/v1747833267/vismay_wdssm1.jpg",
    siteName: "Vismay - GMCMiraj",
    type: "website",
    locale: "en_US",
  },
};

import ScheduleClient from './ScheduleClient';

export default function SchedulePage() {
  return <ScheduleClient />;
}
