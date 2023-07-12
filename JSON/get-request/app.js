const getApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
