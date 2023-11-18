async function fetchData() {
    try {
      //const response = await fetch("https://tracking-app-docker.onrender.com/records/user_test/hash_password_test");
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json(); 
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
export { fetchData }