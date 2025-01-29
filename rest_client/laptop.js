const ip = "192.168.1.10";
const port = 3002;
const url = "http://" + ip + ":" + port + "/";
export const getAllLaptops = (fnRefreshList) => {
  console.log("getAllLaptops");
  fetch(url + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};
