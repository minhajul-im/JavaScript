/**
 * What is network error?
 Network errors can happen when performing tasks such as sending HTTP requests, fetching data from APIs, loading external resources (like images or scripts), or establishing network connections. These errors can be caused by various factors, including server unavailability, network interruptions, DNS resolution failures, CORS (Cross-Origin Resource Sharing) restrictions, and timeouts.
 */

const url = "www.example.com/posts";

fetch(url)
  .then((res) => res.json())
  .catch((error) => {
    console.log(error);
  });

// network error
const asyncFunc = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    throw new Error(`Error :- ${error}`);
  }
};
