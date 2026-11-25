import React from 'react';
import Nav from '../component/nav';
import Footer from '../component/footer';
import VideoPage from '../component/interview';

export const metadata = {
  title: 'Carbon Count Conversations | Podcasts & Interviews — Raghav Agarwal',
  description:
    'In-depth podcast conversations with environmental leaders, grassroots changemakers, and sustainability experts hosted by Raghav Agarwal.',
};

export default function InterviewRoute() {
  return (
    <div className="bg-[#071320] min-h-screen">
      <Nav />
      <VideoPage />
      <Footer />
    </div>
  );
}
