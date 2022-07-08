const cohortName = "2206-FTB-ET-WEB-FT";
const Base_URL = "https://strangers-things.herokuapp.com/api/";

export async function RegisterPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
  console.log(`${Base_URL}${cohortName}/users/register`);
  const response = await fetch(`${Base_URL}${cohortName}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: registerUsername,
        password: registerPassword,
      },
    }),
  });

  const result = await response.json();
  return result
}

export async function LoginPerson(event) {
  const loginUsername = event.target[0].value;
  const loginPassword = event.target[1].value;
  console.log(`${Base_URL}${cohortName}/users/login`);
  const response = await fetch(`${Base_URL}${cohortName}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: loginUsername,
        password: loginPassword,
      },
    }),
  });

  const result = await response.json();
  const token = result.data.token;
  console.log(token)
  return token
}

export async function GetPosts() {
  const response = await fetch(`${Base_URL}${cohortName}/posts`);
  const result = await response.json();
  const userposts = result
  // console.log(result)
  
return userposts;
}

export async function getProfile(token){
  console.log(`${Base_URL}${cohortName}/users/me`)
    const response = await fetch(`${Base_URL}${cohortName}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const result = await response.json()
    console.log(result)
    return result
}

export async function addPost(token, titleInput, descriptionInput, priceInput, willDeliver) {
  console.log(token, titleInput, descriptionInput, priceInput, willDeliver)
  const response = await fetch(`${Base_URL}${cohortName}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: titleInput,
        description: descriptionInput,
        price: priceInput,
        willDeliver: willDeliver
      }
    })
  })
  const result = await response.json()
  console.log(result, "add post fired")
  return result.data.post
}

export async function editPost(token, titleInput, descriptionInput, priceInput, willDeliver, postId) {
  const response = await fetch(`${Base_URL}${cohortName}/posts/${postId}`, {
    method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      location: "On Request",
      willDeliver: willDeliver
    }
  })
  })
  const result = await response.json()
  console.log(result.data._id)
  return result
}



// export async function deletePost(token) {
//   const response = await fetch(`${Base_URL}${cohortName}/posts/${token}`)
// }