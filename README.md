# React- Places Application

Demo URL : https://react-place-hdv.herokuapp.com/

### Main Libraries Used
<ul>
<li>Redux</li>
<li>Redux-Thunk</li>
<li>react-google-maps</li>
<li>@material-ui</li>
</ul>


#### Known Issues: 

1.) Setting bounds automatically on React Google Maps 
https://github.com/tomchentw/react-google-maps/issues/305


2.) CORS issue on Google Maps API requests. 
Unfortunately I had no time to setup a proxy and use a express server hence I ended up in using a third party proxy
https://cors-anywhere.herokuapp.com/. This may cause a slight delay on fetching suggestions.