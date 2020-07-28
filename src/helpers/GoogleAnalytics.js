import ReactGA from 'react-ga';

const registerGoogleAnalytics = () => {
    ReactGA.initialize("UA-142421407-2");
}

const registerPageVisit = (pathname) => {
    ReactGA.pageview(pathname);
    ReactGA.event({
        category: 'Visiting',
        action: 'Visted the site',
        label: 'Profile'
    });
}

const registerResumeDownloads = () => {
    ReactGA.event({
        category: "Resume",
        action: `Downloaded the resume at ${new Date().toDateString()}`,
        label: "Download"
    });
}

const registerHireMeClicks = () => {
    ReactGA.event({
        category: "Hireme",
        action: `Clicked Hireme`,
        label: "Hireme"
    });
}

export {
    registerGoogleAnalytics,
    registerPageVisit,
    registerResumeDownloads,
    registerHireMeClicks
}
