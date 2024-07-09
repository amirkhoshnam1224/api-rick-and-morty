import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-customBlack p-6">
      <div className="text-white max-w-4xl p-8 bg-black rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About the Project</h1>
        <p className="text-lg mb-4">
          Hi! I'm Amir Khoshsheno, and I created this project to showcase characters, episodes, and locations from the Rick and Morty series.
          <br />
          This project uses the Rick and Morty API to fetch and display information about the characters, episodes, and locations.
        </p>
        <p className="text-lg mb-4">
          The project is built using the React library and utilizes React Router for routing management. Additionally, CSS and Tailwind is used for styling.
        </p>
        <p className="text-lg">
          If you have any questions or want to get in touch with me, please feel free to contact me.
        </p>
      </div>
    </div>
  );
}

export default Home;
