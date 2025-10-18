import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Layout & Pages
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

import Footer from './Components/Footer/Footer.jsx';

// Google Client ID
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Router
const routers = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // 👈 دي الصفحة الرئيسية
     
      { path: 'footer', element: <Footer /> },
     
   
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// Main App
function App() {

  // src/disableInspect.js
(function () {
  // تعطيل اليمين
  window.addEventListener('contextmenu', function (e) {
    try { e.preventDefault(); } catch (err) {}
  });

  // تعطيل اختصارات الكيبورد الشائعة (F12, Ctrl+Shift+I/J, Ctrl+U)
  window.addEventListener('keydown', function (e) {
    try {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key.toLowerCase() === 'u') ||
        (e.metaKey && e.altKey && e.key === 'i') // mac combos
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    } catch (err) {}
  });

  // محاولة كشف فتح DevTools (heuristic)
  let devtoolsOpen = false;
  const threshold = 160;

  const checkDevTools = () => {
    try {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      const isOpen = widthThreshold || heightThreshold;
      if (isOpen && !devtoolsOpen) {
        devtoolsOpen = true;
        // Action when opened: replace below with what you want
        // e.g., window.location.href = '/'; // redirect
        // or show overlay / logout
        console.warn('DevTools detected');
        // document.body.style.display = 'none'; // (optional) hide UI
      } else if (!isOpen && devtoolsOpen) {
        devtoolsOpen = false;
        console.warn('DevTools closed');
        // restore UI if you hid it
      }
    } catch (err) {}
  };

  // Polling interval (1s)
  setInterval(checkDevTools, 1000);

  // Extra: block right-click on specific elements (optional)
})();

  if (!googleClientId) {
    console.error('❌ Missing Google Client ID in .env file.');
    return <div>Missing Google Client ID. Please set it in the .env file.</div>;
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <RouterProvider router={routers} />
    </GoogleOAuthProvider>
  );
}

export default App;
