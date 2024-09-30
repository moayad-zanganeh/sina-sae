// // src/components/MusicPlayer.tsx
// import React, { useEffect, useRef, useState } from 'react';

// function MusicPlayer() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isClient, setIsClient] = useState(false);

//   const songs = [
//     '/audio/manshour.mp3',
//     '/audio/Sina Sae - Khoone.mp3',
//     '/audio/Sina Sae - Moalagh.mp3',
//     '/audio/Sina Sae - Pabarjam.mp3',
//     '/audio/Sina Sae - Yadam Nemire.mp3',
//     '/audio/sina_sae_tehran.mp3',
//   ];

//   useEffect(() => {
//     setIsClient(true);

//     if (isClient && audioRef.current) {
//       const randomSong = songs[Math.floor(Math.random() * songs.length)];
//       audioRef.current.src = randomSong;
//       audioRef.current.play().catch(() => {
//         console.log('Playback prevented by the browser.');
//       });
//     }

//     const playAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.play().catch(() => {
//           console.log('Playback prevented by the browser.');
//         });
//       }
//     };

//     document.addEventListener('click', playAudio);

//     return () => {
//       document.removeEventListener('click', playAudio);
//     };
//   }, [isClient]);

//   if (!isClient) return null;

//   return <audio ref={audioRef} loop />;
// }

// export default MusicPlayer;
