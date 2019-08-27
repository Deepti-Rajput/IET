var WebService = {
    BaseURL: 'http://rav-dsk-176/IETTVService-Dev/',
    IndividualUserBaseURL: 'http://dev-rave.theiet.org/IETTVService-Dev/',
    LoginOriginalURL: 'http://dev-rave.theiet.org/IETTVPortal-Dev/view/IndividualLogon.html',
    WebSiteName: 'IETTVPortal-Dev',
    LogOffRedirctURL: 'https://dev-logon.theiet.org/logout.cfm?originurl=' + encodeURIComponent('http://dev-rave.theiet.org/IETTVPortal-Dev/'),
    LogInRedirectURL: 'https://dev-logon.theiet.org/login.cfm',
    ForgottenPasswordIETURL: 'https://dev-www.theiet.org/help/passwordResetRequest.cfm?',
    SignalRUrl: "http://localhost:55517/signalr",
    SignalRHubUrl: "http://localhost:55517/signalr/hubs",
    DisableChat: false,
    CMSSharePath: 'Upload/CMS/'
};

if (location.href.Contain('dev-rave.theiet.org')) {
    WebService.BaseURL = WebService.IndividualUserBaseURL;
}