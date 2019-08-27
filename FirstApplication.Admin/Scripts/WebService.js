var WebService = {
	BaseURL: 'http://localhost/IETTVService/',
	IndividualUserBaseURL: 'http://dev-rave.theiet.org/IETTVService/',
	LoginOriginalURL: 'http://dev-rave.theiet.org/IETTVPortal/view/IndividualLogon.html',
	WebSiteName: 'IETTVPortal',
	LogOffRedirctURL: 'https://test-logon.theiet.org/logout.cfm?originurl=' + encodeURIComponent('http://dev-rave.theiet.org/IETTVPortal/'),
	LogInRedirectURL: 'https://test-logon.theiet.org/login.cfm',
	ForgottenPasswordIETURL: 'https://test-www.theiet.org/help/passwordResetRequest.cfm?',
	SignalRUrl: "http://192.168.2.74/pushservice/signalr",
	SignalRHubUrl: "http://192.168.2.74/pushservice/signalr/hubs",
	DisableChat: false,
	StreamUrl: "http://open.http.mp.streamamg.com/html5/html5lib/v2.42/mwEmbedLoader.php/p/2000439",
	//GoogleApiKey: "AIzaSyCsNcs77aqfADGQu5qfQI8WlWzuC2u8MrU",
	//GoogleCustomSearchKey: "017754066774365358043:lyjyorqiptq",
	GoogleApiKey: "AIzaSyD0XGF40un3MIa-iUDHO4SIMA0RxNLp_wY",
	GoogleCustomSearchKey: "013072311606752261868:0fveiwjwejw",
	CMSSharePath: 'Upload/CMS/',
	EMSSharePath: 'Upload/EMS/',
	PROMOSharePath: 'Upload/PMS/',
	ApplicationName: 'IET TV',
	DisableGA: false,

	TenantName: 'ietdssodb2c.onmicrosoft.com',
	SignInSignUpPolicyName: 'B2C_1A_RPNonMemberSignUpSignInV0.6',
	Redirect_Uri: 'https://localhost:44354/view/Logout.html',
	LoginRedirect_Uri: 'https://localhost:44354/view/IndividualLogon.html',
	MicrosoftLoginURL: 'https://ietdssodb2c.b2clogin.com/',
	LoginURL: 'https://localhost:44354/View/LoginNew.html',
	ApplicationId: '93825f5e-9d1a-435a-8bf5-94e22125d3bb',
	AzureLogoutURL: 'https://ietdssodb2c.b2clogin.com/',

	CookieName: "IET_SSO_Cookie",
	DomainName: "localhost"
};

if (location.href.Contain('dev-rave.theiet.org')) {
	WebService.BaseURL = WebService.IndividualUserBaseURL;
}