// 'use client';

// import React from 'react';
// import Head from 'next/head';



// // --- 1. HELPER: Convert Drive Link to Embed Link ---
// const getEmbedUrl = (url) => {
//   try {
//     const match = url.match(/\/d\/(.+?)\//);
//     if (match && match[1]) {
//       return `https://drive.google.com/file/d/${match[1]}/preview`;
//     }
//     return url;
//   } catch (e) {
//     return url;
//   }
// };

// export default function VideoPage() {
//   // --- 2. DATA: Your Videos ---
//   const videos = [
//     {
//       id: 1,
//       title: "Environmental Impact Initiative",
//       url: "https://drive.google.com/file/d/11oNADrZlfLfwde-N2xjNOSRweBJ2fmsi/view?usp=drive_link",
//       description: "Exploring the intersection of modern corporate responsibility and natural conservation. See how we are reducing our carbon footprint.",
//       tag: "Sustainability"
//     },
//     {
//       id: 2,
//       title: "Community Outreach 2026",
//       url: "https://drive.google.com/file/d/155M0Xo9YA_vsbpsieExbNhx3I84l9s2g/view?usp=drive_link",
//       description: "",
//       tag: "Social Impact"
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>EcoVision | Nature & Society</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* --- 3. CSS STYLES (Internal) --- */}
//       <style jsx>{`
//         /* --- VARIABLES & BASE --- */
//         :global(body) {
//           margin: 0;
//           padding: 0;
//           font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Modern */
//           background-color: #f8fafc; /* Very light slate */
//           color: #334155;
//         }

//         /* --- LAYOUT UTILITIES --- */
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }
        
//         .flex-between {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         /* --- NAVBAR (Corporate & Navy) --- */
//         .navbar {
//           background-color: #0a192f; /* Navy Blue */
//           color: white;
//           padding: 1rem 0;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }
        
//         .logo {
//           font-family: 'Georgia', serif; /* Traditional */
//           font-size: 1.5rem;
//           font-weight: bold;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
        
//         .logo-mark {
//           width: 30px;
//           height: 30px;
//           background: linear-gradient(135deg, #22d3ee, #10b981); /* Cyan to Green */
//           border-radius: 8px 0 8px 0; /* Playful shape */
//         }

//         .nav-links a {
//           color: #cbd5e1;
//           text-decoration: none;
//           margin-left: 2rem;
//           font-size: 0.9rem;
//           transition: color 0.3s;
//         }
//         .nav-links a:hover { color: white; }
//         .nav-cta { color: #22d3ee !important; font-weight: bold; }

//         /* --- HERO SECTION (Naturalistic & Modern) --- */
//         .hero {
//           background-color: #0a192f;
//           padding: 5rem 1rem;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Decorative blobs */
//         .blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           opacity: 0.2;
//         }
//         .blob-1 { top: -50px; left: -50px; width: 300px; height: 300px; background: #10b981; }
//         .blob-2 { bottom: -50px; right: -50px; width: 400px; height: 400px; background: #22d3ee; }

//         .hero h1 {
//           font-family: 'Georgia', serif; /* Traditional Header */
//           font-size: 3.5rem;
//           color: white;
//           margin-bottom: 1.5rem;
//           position: relative;
//           z-index: 10;
//         }

//         .gradient-text {
//           background: linear-gradient(to right, #22d3ee, #10b981);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .hero p {
//           color: #94a3b8;
//           font-size: 1.2rem;
//           max-width: 600px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 10;
//         }

//         /* --- MAIN CONTENT --- */
//         .section-title {
//           margin-top: 4rem;
//           margin-bottom: 2rem;
//           padding-left: 1rem;
//           border-left: 5px solid #22d3ee; /* Cyan Accent */
//         }
//         .section-title h2 { color: #0a192f; margin: 0; font-size: 2rem; }
//         .section-title p { margin: 5px 0 0 0; color: #64748b; font-style: italic; }

//         /* --- VIDEO GRID --- */
//         .grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2.5rem;
//           margin-bottom: 5rem;
//         }
        
//         /* Media Query for Desktop */
//         @media (min-width: 768px) {
//           .grid { grid-template-columns: 1fr 1fr; }
//         }

//         /* --- CARD DESIGN (Eco-Corporate) --- */
//         .card {
//           background: white;
//           border-radius: 16px; /* Playful Rounding */
//           overflow: hidden;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           border-bottom: 4px solid #10b981; /* Green foundation */
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .card:hover {
//           transform: translateY(-8px); /* Modern lift effect */
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
//         }

//         .card-header {
//           background: linear-gradient(to right, #0f172a, #1e293b);
//           padding: 12px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .tag {
//           background: rgba(34, 211, 238, 0.1);
//           color: #22d3ee;
//           padding: 4px 12px;
//           border-radius: 4px;
//           font-size: 0.75rem;
//           font-weight: bold;
//           text-transform: uppercase;
//           border: 1px solid rgba(34, 211, 238, 0.3);
//         }

//         .dots { display: flex; gap: 6px; }
//         .dot { width: 8px; height: 8px; border-radius: 50%; }

//         .video-wrapper {
//           position: relative;
//           padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
//           height: 0;
//           background-color: #e2e8f0;
//         }

//         .video-wrapper iframe {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: none;
//         }

//         .card-body { padding: 1.5rem; }

//         .card-body h3 {
//           font-family: 'Georgia', serif;
//           color: #0a192f;
//           margin-top: 0;
//           font-size: 1.5rem;
//         }

//         .card-body p { line-height: 1.6; color: #475569; }

//         .btn-discussion {
//           display: inline-block;
//           margin-top: 1rem;
//           background-color: #ecfdf5; /* Light Green */
//           color: #065f46;
//           padding: 8px 20px;
//           border-radius: 50px;
//           font-weight: 600;
//           font-size: 0.9rem;
//           border: none;
//           cursor: pointer;
//           transition: background 0.2s;
//         }
//         .btn-discussion:hover { background-color: #d1fae5; }

//         /* --- FOOTER --- */
//         .footer {
//           background-color: #0a192f;
//           color: #64748b;
//           text-align: center;
//           padding: 2rem;
//           font-size: 0.9rem;
//         }
//       `}</style>

//       {/* --- 4. HTML MARKUP --- */}
//       <div className="page-wrapper">
        
//         {/* Navigation */}
      

//         {/* Hero */}
//         <header className="hero">
//           <div className="blob blob-1"></div>
//           <div className="blob blob-2"></div>
//           <div className="container">
//             <h1>Harmonizing <span className="gradient-text">Nature</span> & Society</h1>
//             <p>
//               A curated collection of visual stories that bridge the gap between 
//               corporate innovation and our natural world.
//             </p>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="container">
//           <div className="section-title">
//             <h2>Featured Stories</h2>
//             <p>Watch our latest environmental initiatives.</p>
//           </div>

//           <div className="grid">
//             {videos.map((video) => (
//               <div key={video.id} className="card">
//                 {/* Card Header (Modern/Playful) */}
//                 <div className="card-header">
//                   <span className="tag">{video.tag}</span>
//                   <div className="dots">
//                     <div className="dot" style={{ background: '#f87171' }}></div>
//                     <div className="dot" style={{ background: '#facc15' }}></div>
//                     <div className="dot" style={{ background: '#4ade80' }}></div>
//                   </div>
//                 </div>

//                 {/* Video Embed */}
//                 <div className="video-wrapper">
//                   <iframe
//                     src={getEmbedUrl(video.url)}
//                     allow="autoplay; fullscreen"
//                     title={video.title}
//                   />
//                 </div>

//                 {/* Card Body (Traditional Text) */}
//                 <div className="card-body">
//                   <h3>{video.title}</h3>
//                   <p>{video.description}</p>
//                   <button className="btn-discussion">
//                     Start Discussion &rarr;
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="footer">
//           <p>&copy; 2026 EcoVision Corp. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }

'use client';

import React from 'react';
import Head from 'next/head';


// --- 1. HELPER: Convert Drive Link to Embed Link ---
const getEmbedUrl = (url) => {
  try {
    const match = url.match(/\/d\/(.+?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  } catch (e) {
    return url;
  }
};

export default function CarbonCountPage() {
  // --- DATA SECTIONS ---
  
  // 1. Interviews (Videos)
  const interviews = [
    {
      id: 1,
      title: "Shital Bavishi: Architect of a Greener Future",
      url: "https://drive.google.com/file/d/155M0Xo9YA_vsbpsieExbNhx3I84l9s2g/view?usp=drive_link",
      description: "An exclusive insight into Shital Bavishi's pivotal role in driving sustainability strategies. She discusses balancing operational growth with measurable environmental impact reduction.",
      tag: "Industry Leader"
    },
    {
      id: 2,
      title: "Anaika in Action: Empowering Communities",
      url: "https://drive.google.com/file/d/11oNADrZlfLfwde-N2xjNOSRweBJ2fmsi/view?usp=drive_link",
      description: "A dynamic force for local change, Anaika spearheads interactive workshops that raise critical awareness. Her hands-on approach educates participants on practical steps to reduce their carbon footprint.",
      tag: "Community Voice"
    }
  ];

  // 2. Resources (Blogs & Newsletters)
  const resources = [
    {
      id: 1,
      type: "Finance Newsletter",
      title: "Carbon Credits & Market Trends",
      date: "Oct 24, 2025",
      icon: "📊"
    },
    {
      id: 2,
      type: "Blog Post",
      title: "5 Ways We Reduced Office Waste",
      date: "Oct 20, 2025",
      icon: "✍️"
    },
    {
      id: 3,
      type: "Impact Report",
      title: "Annual Sustainability Audit",
      date: "Sep 30, 2025",
      icon: "🌍"
    }
  ];

  return (
    <>
      <Head>
        <title>Carbon Count | Impact Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        /* --- GLOBAL --- */
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #f0fdf4; /* Very light Mint/Green tint */
          color: #334155;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* --- HERO: The "Carbon Count" Dashboard Feel --- */
        .hero {
          background-color: #0a192f; /* Navy 900 */
          padding: 4rem 1rem 6rem 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom-left-radius: 60px; /* Playful/Modern curve */
          border-bottom-right-radius: 60px;
        }

        /* Background Effects */
        .glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(10,25,47,0) 70%);
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        .hero-content { position: relative; z-index: 10; }

        .kpi-badge {
          display: inline-block;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.4);
          color: #22d3ee;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          font-weight: bold;
        }

        h1 {
          font-family: 'Georgia', serif;
          font-size: 3.5rem;
          color: white;
          margin: 0 0 1rem 0;
        }

        .subtitle {
          color: #94a3b8;
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* --- STATS ROW (Corporate/Finance) --- */
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
        }
        .stat-val {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: #10b981; /* Emerald */
        }
        .stat-label {
          color: #cbd5e1;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* --- SECTIONS --- */
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5rem;
          margin-bottom: 2rem;
        }
        
        .section-title {
          font-family: 'Georgia', serif;
          font-size: 2rem;
          color: #0a192f;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .section-line {
          flex-grow: 1;
          height: 1px;
          background: #cbd5e1;
          margin-left: 20px;
          max-width: 200px;
        }

        /* --- VIDEO GRID --- */
        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media(min-width: 768px) { .video-grid { grid-template-columns: 1fr 1fr; } }

        .video-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s;
          border: 1px solid #e2e8f0;
        }
        .video-card:hover { transform: translateY(-5px); }

        .video-frame {
          position: relative;
          padding-bottom: 56.25%;
          background: #000;
        }
        .video-frame iframe {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          border: none;
        }

        .video-info { padding: 1.5rem; }
        .v-tag {
          color: #10b981;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .v-title { margin: 0.5rem 0; color: #0f172a; font-size: 1.25rem; font-weight: bold; }
        .v-desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- RESOURCES GRID (Blogs/Newsletters) --- */
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .res-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          border-left: 6px solid #22d3ee; /* Cyan accent */
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .res-card:hover {
          background: #ecfeff; /* Light Cyan Hover */
          box-shadow: 0 10px 25px rgba(34, 211, 238, 0.15);
        }

        .res-icon { font-size: 2rem; margin-bottom: 1rem; }
        .res-type { font-size: 0.8rem; color: #64748b; text-transform: uppercase; font-weight: bold; }
        .res-title { font-size: 1.25rem; font-weight: bold; color: #0a192f; margin: 0.5rem 0; }
        .res-date { font-size: 0.85rem; color: #94a3b8; margin-top: auto; }

        /* --- ABOUT SECTION (Social/Natural) --- */
        .about-section {
          background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
          color: white;
          padding: 4rem;
          border-radius: 30px;
          margin-bottom: 4rem;
          text-align: center;
        }
        .about-text { max-width: 700px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8; color: #e2e8f0; }

        /* --- FOOTER --- */
        .footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 0.9rem;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="hero">
        <div className="glow"></div>
        <div className="hero-content">
          <div className="kpi-badge">LIVE TRACKER</div>
          <h1>Carbon Count</h1>
          <p className="subtitle">
            Transparency in action. A central hub for our interviews, financial newsletters, 
            and initiatives dedicated to reducing our global footprint.
          </p>

          {/* KPI Stats (Simulated Data) */}
          {/* <div className="stats-row">
            <div className="stat-item">
              <span className="stat-val">12%</span>
              <span className="stat-label">Reduction YTD</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">$4.2M</span>
              <span className="stat-label">Green Investment</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">850</span>
              <span className="stat-label">Trees Planted</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container">
        
        {/* --- SECTION 1: ABOUT --- */}
        <div className="section-header">
          <div className="section-title">
            Our Mission <div className="section-line"></div>
          </div>
        </div>
        <div className="about-section">
          <h2>Driving Finance Towards Nature</h2>
          <p className="about-text">
            We are more than just an organization; we are a movement. By integrating 
            corporate finance with ecological stewardship, we ensure that every dollar 
            spent contributes to a greener, more sustainable society.
          </p>
        </div>

        {/* --- SECTION 2: INTERVIEWS (Videos) --- */}
        <div className="section-header">
          <div className="section-title">
            Expert Interviews <div className="section-line"></div>
          </div>
        </div>

        <div className="video-grid">
          {interviews.map((vid) => (
            <div key={vid.id} className="video-card">
              <div className="video-frame">
                <iframe 
                  src={getEmbedUrl(vid.url)} 
                  title={vid.title} 
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
              <div className="video-info">
                <div className="v-tag">{vid.tag}</div>
                <h3 className="v-title">{vid.title}</h3>
                <p className="v-desc">{vid.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: FINANCE & BLOGS --- */}
        {/* <div className="section-header">
          <div className="section-title">
            Newsletters & Insights <div className="section-line"></div>
          </div>
        </div> */}
{/* 
        <div className="resource-grid">
          {resources.map((res) => (
            <div key={res.id} className="res-card">
              <div>
                <div className="res-icon">{res.icon}</div>
                <div className="res-type">{res.type}</div>
                <h3 className="res-title">{res.title}</h3>
              </div>
              <div className="res-date">{res.date}</div>
            </div>
          ))}
        </div> */}

      </div>

     
    </>
  );
}