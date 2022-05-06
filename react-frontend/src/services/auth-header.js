export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("###");
  if (user && user.accessToken) {
    console.log("***",user.accessToken);
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}