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
  const token = result.data.token;
  localStorage.setItem("token", token);
  const tokenFromStorage = localStorage.getItem("token");
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
  return result
}

export async function GetPosts() {
  const response = await fetch(`${Base_URL}${cohortName}/posts`, {});
  const result = await response.json();
  const userposts = result.data.posts[0]
  console.log(result)
  return userposts;
}
