async function fetchdata(apiurl){
  try {
    let response = await fetch(apiurl);
    if(!response.ok) {
      throw new Error("Failed to Fetch Data");
    }
    let data = await response.json();
    return data;
  }catch(error) {
    console.log(error);
  }
}

export default fetchdata;