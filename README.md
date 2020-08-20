# tagup_frontend_challenge

#### Try Out the Application:
[https://guiguyjim.github.io/tagup_frontend_challenge/](https://guiguyjim.github.io/tagup_frontend_challenge/).

#### Screen Shots
![Main UI](/screenshots/MainUI.png)Main UI  
  
![HeaderWithDetailsShown](/screenshots/HeaderWithDetailsShown.png)Header bar, but with details shown  
  
![ConfirmDeleteIssueModal](/screenshots/ConfirmDeleteIssueModal.png)Confirm Delete Issue modal shown  

#### Known Limitations and Considerations
Project only designed and manually tested on 'desktop sized' (~ 1024 X 768 +) screens (see test matrix for details)  
'Fluid Layout' to accomodate moderate screen size changes needs some work still  
Code linting needs to be re-configured, so currently is selectively disabled  
Unit test coverage is minimal  
Project not designed for a mobile device or with touch input  
We're importing the entire BootstrapVue component set; this causes performance warnings for the production build.
Likely those warnings could be eliminated via using BoostrapVue in a different way.
See: [BootstrapVue's Getting Started documentation, especially smaller bundles](https://bootstrap-vue.org/docs).

#### Manual Testing Matrix -- Spot-Check Results
Firefox (v.78.0.2) on Linux -- Working; no specific issues (development platform -- additional testing)  
Chrome 84 on OSX Yosemite -- Working, no specific issues  
Firefox 77 on OSX Yosemite -- Working, no specific issues  
Safari 10 on OSX Yosemite -- Working, minor layout issue (Delete button location)  
Firefox 78 on Windows 10 -- Working, minor layout issue (Delete button location) at some screen resolutions (e.g., 250% scaling)  
Firefox 78 on Windows 7 -- Working, layout issue (vertical scroll bar on entire page)  
Mobile Safari on iOS 13.5.1 -- Works, but layout not mobile-friendly

#### Prerequisites
Node.js  (built and tested with version: 12.8.3)  
NPM  (built and tested with version: 6.14.6)  
Vue CLI  (built and tested with version: 4.5.2 -- uses Vue.js version: 2)

#### Project setup
```
npm install
```

#### To compile code and view results in a browser
(development mode, with 'hot module replacement')
```
npm run serve
```

#### Make a production build
(with minimization, etc.) -- build artifacts created in `/dist`
```
npm run build
```

#### Run unit test suite
```
npm run test:unit
```

#### Lint/fix/prettify code
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Folder Structure Notes
`/design_assets` - may contain wireframes, color scheme reference, other non-buildable assets  (FOR REFERENCE ONLY)

#### License & Copyrights

All code and other content Copyright 2020 by Jamison H. Abbott, unless noted below.  

---
Any FOSS code/content is used under its respective licensing terms and ownership.  
Any assets from tagup.io are included solely under the Academic Fair Use copyright doctrine, and remain the property of their owner.
