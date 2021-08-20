export async function fetchUserData(userLogin: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const data = await response.json();

    return !data.message ? data : null;
  } catch (error) {
    return null;
  }
}
