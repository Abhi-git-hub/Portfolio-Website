import React from 'react';

const videoEdits = [
  {
    title: "Travel Vlog Edit",
    description: "Dynamic video editing for YouTube.",
    link: "https://youtube.com/yourvideo",
    image: "/src/assets/video1.jpg"
  },
  {
    title: "Short Film",
    description: "A short film with cinematic editing and effects.",
    link: "https://youtube.com/yourfilm",
    image: "/src/assets/video2.jpg"
  }
  // Add more video edits as needed
];

function VideoEdits() {
  return (
    <section>
      <h1>Video Edits</h1>
      <p>
        A showcase of my video editing work, including vlogs, short films, and more.
      </p>
      <div className="project-grid">
        {videoEdits.map((edit, idx) => (
          <a href={edit.link} target="_blank" rel="noopener noreferrer" key={idx} className="project-card">
            <img src={edit.image} alt={edit.title} />
            <div>
              <h3>{edit.title}</h3>
              <p>{edit.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default VideoEdits;