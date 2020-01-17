/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
function cardMaker (gitUrl) {
  const newCard = document.createElement('div'),
        newImage = document.createElement('img'),
        newInformation = document.createElement('div'),
        newName = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p')
  newCard.append(newImage);
  newCard.append(newInformation);
  newInformation.append(newName);
  newInformation.append(userName);
  newInformation.append(location);
  newInformation.append(profile);
  newInformation.append(followers);
  newInformation.append(following);
  newInformation.append(bio);
  newCard.classList.add('card');
  newInformation.classList.add('card-info');
  newName.classList.add('name');
  userName.classList.add('username');
  newImage.src = gitUrl.avatar_url
  newName.textContent = `Name: ${gitUrl.name}`;
  userName.textContent = `User Name: ${gitUrl.login}`;
  location.textContent = `Location: ${gitUrl.location}`;
  profile.textContent = `Profile: ${gitUrl.html_url}`;
  followers.textContent =`Followers: ${gitUrl.followers}`;
  following.textContent =`Following: ${gitUrl.following}`;
  bio.textContent = gitUrl.bio;
  return newCard;
}
const entryPoint = document.querySelector('.cards')

axios.get('https://api.github.com/users/jKuenzinger')
.then(response => {
    entryPoint.append(cardMaker(response.data))
})
.catch(error => {
  console.log('The data was not returned', error)
})




const followersArray = ['wildcard329', 'MarioR81', 'sdelpercio', 'cristinaedens', 'BrandyBecker' ];

users = followersArray.map(user => 'https://api.github.com/users/' .concat(user))

users.forEach(user => {
  axios.get(user)
  .then(response =>{
    entryPoint.append(cardMaker(response.data))
  })
})





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
