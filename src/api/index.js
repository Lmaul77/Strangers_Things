const cohortName = "2206-FTB-ET-WEB-FT";
const Base_URL = "https://strangers-things.herokuapp.com/api/";

export async function RegisterPerson(event) {
    const registerUsername = event.target[0].value
    const registerPassword = event.target[1].value
    console.log(`${Base_URL}${cohortName}/users/register`)
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
  })

  const result = await response.json()
  const token = result.data.token
  localStorage.setItem("token", token)
  const tokenFromStorage = localStorage.getItem("token")
}

