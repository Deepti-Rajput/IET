var WebService = {
    BaseURL: 'http://203.199.125.72/IETTVService/',
    IndividualUserBaseURL: 'http://dev-rave.theiet.org/IETTVService/',
    LoginOriginalURL: 'http://dev-rave.theiet.org/IETTVPortal/view/IndividualLogon.html',
    WebSiteName: 'IETTVPortal',
    LogOffRedirctURL: 'https://uat-logon.theiet.org/logout.cfm?originurl=' + encodeURIComponent('http://dev-rave.theiet.org/IETTVPortal/'),
    LogInRedirectURL: 'https://uat-logon.theiet.org/login.cfm',
    ForgottenPasswordIETURL: 'https://uat-www.theiet.org/help/passwordResetRequest.cfm?',
    SignalRUrl: "http://192.168.2.117/pushservice/signalr",
    SignalRHubUrl: "http://192.168.2.117/pushservice/signalr/hubs",
    DisableChat: false,
    StreamUrl: "https://mmp.streamuk.com/html5/html5lib/v2.0.RC3/mwEmbedLoader.php/p/2000369",  
    CMSSharePath: 'Upload/CMS/'
};

if (location.href.Contain('dev-rave.theiet.org')) {
    WebService.BaseURL = WebService.IndividualUserBaseURL;
}