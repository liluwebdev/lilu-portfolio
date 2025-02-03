
import React from 'react';
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Development from "./pages/development";
import Design from "./pages/design";
import Education from "./pages/education";
import Curricula from "./pages/curricula";
import Contact from "./pages/contact";
import About from "./pages/about";
import WhatIsArt from "./pages/curriculum/what-is-art";
import EmbracingMatisse from "./pages/curriculum/embracing-matisse";
import PortfolioDetailsPage from "./pages/portfolioDetailsTemplate";
import PaperMacheMasks from './pages/curriculum/paper-mache-masks';
import KromanWatchworks from './pages/design/kroman';

function routes() {
  return [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/education", element: <Education /> },
    { path: "/curricula", element: <Curricula /> },
    { path: "/contact", element: <Contact /> },
    { path: "/port-details", element: <PortfolioDetailsPage /> },
    { path: "/portfolio/development", element: <Development /> },
    { path: "/portfolio/design", element: <Design /> },
    { path: "/curriculum/matisse", element: <EmbracingMatisse /> },
    { path: "/curriculum/what-is-art", element: <WhatIsArt /> },
    { path: "/curriculum/paper-mache-masks", element: <PaperMacheMasks /> },
    { path: "/design/kroman", element: <KromanWatchworks /> },
    //{ path: "*", element: <NotFound /> },
  ];
}

export default routes;