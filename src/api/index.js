const cohortName = "2206-FTB-ET-WEB-FT";
const Base_URL = "https://strangers-things.herokuapp.com/api/";

export async function RegisterPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
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
  return result;
}

export async function LoginPerson(event) {
  const loginUsername = event.target[0].value;
  const loginPassword = event.target[1].value;
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
  return token;
}

export async function GetPosts() {
  const response = await fetch(`${Base_URL}${cohortName}/posts`);
  const result = await response.json();
  const userposts = result;

  return userposts;
}

export async function getProfile(token) {
  const response = await fetch(`${Base_URL}${cohortName}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function addPost(
  token,
  titleInput,
  descriptionInput,
  priceInput,
  willDeliver
) {
  const response = await fetch(`${Base_URL}${cohortName}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: titleInput,
        description: descriptionInput,
        price: priceInput,
        willDeliver: willDeliver,
      },
    }),
  });
  const result = await response.json();
  return result.data.post;
}

export async function editPost(
  token,
  titleInput,
  descriptionInput,
  priceInput,
  willDeliver,
  _id
) {
  const response = await fetch(`${Base_URL}${cohortName}/posts/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: titleInput,
        description: descriptionInput,
        price: priceInput,
        willDeliver: willDeliver,
      },
    }),
  });

  const result = await response.json();

  return result;
}

export async function deletePost(token, _id) {
  const response = await fetch(`${Base_URL}${cohortName}/posts/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function sendNewMessage(token, _id, messageContent) {
  const response = await fetch(
    `${Base_URL}${cohortName}/posts/${_id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: messageContent,
        },
      }),
    }
  );
  return await response.json();
}
