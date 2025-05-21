"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Flame } from 'lucide-react';
import CampaignIcon from '@mui/icons-material/Campaign'; // Megaphone-style icon
import MusicNoteIcon from '@mui/icons-material/MusicNote'; 
import PersonPinIcon from '@mui/icons-material/PersonPin'; 
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FlagIcon from '@mui/icons-material/Flag';
import QuizIcon from '@mui/icons-material/Quiz';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Trophy } from 'lucide-react';


export default function ScheduleClient() {
  const [selectedDay, setSelectedDay] = useState("day1");

  const day1 = [
    <div className="w-full flex flex-col gap-6 xl:gap-8">
        <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[#FDE9A3] font-normal text-[2.25rem] md:text-[3rem]">6th June</p>
            <Timeline position="alternate">
            <TimelineItem key="Inauguration">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    >Inauguration
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <CelebrationIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 3, textAlign: "left" }}>
                <Typography>Marking the grand beginning with tradition & pride. Join us as we unveil the start of something extraordinary.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="DeepPrajwalan">
                 <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Deep Prajwalan
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <Flame />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                <Typography>Igniting the flame of wisdom and prosperity. A sacred start to illuminate our journey ahead.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="Speech">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Speech
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <CampaignIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Words that inspire, stories that ignite.Voices shaping the spirit of the event</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="OpeningDanceSong">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Opening Dance Song
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                 <MusicNoteIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                <Typography>A rhythmic tribute to tradition and joy. Let the stage come alive with music and movement.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="InterviewGuest">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Interview of chief Guest
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <PersonPinIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Insights from a visionary mind. A conversation that enlightens and inspires.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="DanceSingDrama">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Dance, Singing, Drama
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <TheaterComedyIcon  />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                <Typography>Expressions that move the soul and spark emotions. A vibrant showcase of talent and culture.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="End">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > End
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <FlagIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Every ending marks a new beginning.
                Thank you for being a part of this memorable journey.</Typography>
            </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
    </div>
  ];

  const day2 = [
    <div className="w-full flex flex-col gap-6 xl:gap-8">
        <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[#FDE9A3] font-normal text-[2.25rem] md:text-[3rem]">7th June</p>
             <Timeline position="alternate">
                <TimelineItem key="TeachersDrama">
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    >
                    Teachers Drama
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <TheaterComedyIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>A delightful performance by our guiding stars.
                Watch our teachers light up the stage with talent and humor.</Typography>
            </TimelineContent>
                </TimelineItem>

                <TimelineItem key="Quiz">
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    >
                    Quiz
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="#FDE9A3">
                    <QuizIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                    <Typography>A battle of brains and quick wit. Let curiosity and knowledge take center stage.</Typography>
                </TimelineContent>
                </TimelineItem>

                <TimelineItem key="DSI">
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Dance, Singing, Instrumental
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="#FDE9A3">
                    <AudiotrackIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: { xs: 4, md: 2 }, textAlign: "left" }}>
                    <Typography>A fusion of rhythm, melody & passion. Celebrating art through every beat and move.</Typography>
                </TimelineContent>
                </TimelineItem>

                <TimelineItem key="End">
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    >
                    End
                    </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="#FDE9A3">
                    <FlagIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                    <Typography>Every ending marks a new beginning. Thank you for being a part of this memorable journey.</Typography>
                </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
  ];

  const day3 = [
    <div className="w-full flex flex-col gap-6 xl:gap-8">
        <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[#FDE9A3] font-normal text-[2.25rem] md:text-[3rem]">8th June</p>
            <Timeline position="alternate">
            <TimelineItem key="StudentsDrama">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Students Drama
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <TheaterComedyIcon  />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Stories told through passion and performance.
                A stage where students bring emotions to life.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="Bands">
                 <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Bands
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <MusicVideoIcon  />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                <Typography>Feel the pulse, hear the beat.
                A high-energy showcase of musical harmony.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="FashionShow">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Fashion Show
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <EmojiPeopleIcon  />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "center" }}>
                <Typography>Where elegance meets confidence on the runway.
                A vibrant celebration of style, trends, and creativity.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="PrizeDist">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > Prize Distribution
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <Trophy  />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Honoring excellence and celebrating achievements.
                Applauding the stars who shined the brightest.</Typography>
            </TimelineContent>
            </TimelineItem>

            <TimelineItem key="End">
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="#FDE9A3"
                    component="span"
                    > End
                    </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="#FDE9A3">
                <FlagIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, textAlign: "left" }}>
                <Typography>Every ending marks a new beginning.
                Thank you for being a part of this memorable journey.</Typography>
            </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
    </div>
  ];

  const getTimeline = () => {
    if (selectedDay === "day1") return day1;
    if (selectedDay === "day2") return day2;
    if (selectedDay === "day3") return day3;
    return null;
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#101010] px-4 md:px-10 lg:px-20 2xl:px-48 py-12 min-h-screen">
        <div className="w-full flex flex-col gap-6 xl:gap-8">
            <div className="flex flex-col items-center gap-4 mb-8">
                <p className="text-[#FDE9A3] font-normal text-[2.25rem] md:text-[5rem]">Run of Show</p>
                <p className="w-full xl:max-w-[80%] text-[#C3C3C3] font-[Inter]  text-center font-normal text-[1.25rem] md:text-[1.5rem]">
                    Join us for a day filled with electrifying performances, workshops, and creative competitions. Celebrate culture, talent, and innovation while networking with fellow enthusiasts. Unleash your creativity and be part of an unforgettable experience at Vismay
                </p>
            </div>
        </div>
        

        {/* Day Switch Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["day1", "day2", "day3"].map((day) => (
            <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`text-white font-semibold text-base px-6 py-3 border rounded-full transition duration-300 ease-in-out mx-2
                ${selectedDay === day 
                    ? "bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300 active:bg-yellow-500" 
                    : "bg-transparent border-white hover:bg-yellow-100 hover:text-black active:bg-yellow-200"
                }`}
            >
                {day.toUpperCase()}
            </button>
            ))}
        </div>

        {/* Timeline */}
        <Timeline className="text-white">{getTimeline()}</Timeline>
      </div>

      <div className="flex flex-col bg-black md:flex-row justify-between items-center gap-16 md:gap-20 px-6 md:px-12 xl:px-24 py-20">
          <p className="max-w-4xl text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-tight text-center md:text-left tracking-tight">
            <span
              className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              style={{
                backgroundImage: "url('/mmm background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.4)",
                WebkitTextStroke: "1px #f5deb3",
              }}
            >
              Myth
            </span>
            <span
              className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              style={{
                backgroundImage: "url('/mmm background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.4)",
                WebkitTextStroke: "1px #f5deb3",
              }}
            >
              Maya
            </span>
            <span
              className="block bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              style={{
                backgroundImage: "url('/mmm background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.4)",
                WebkitTextStroke: "1px #f5deb3",
              }}
            >
              Mystery!
            </span>
          </p>
        </div>
      <Footer />
    </>
  );
}
