const ip = "192.168.1.8";
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
export const saveLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: laptop.id,
      marca: laptop.marca,
      procesador: laptop.procesador,
      memoria: laptop.memoria,
      disco: laptop.disco,
    }),
  };
  fetch(url + "laptops", config)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      fnShowMessage();
    });
};
export const updatelaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: laptop.id,
      marca: laptop.marca,
      procesador: laptop.procesador,
      memoria: laptop.memoria,
      disco: laptop.disco,
    }),
  };
  fetch(url + "laptops/" + laptop.id, config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage();
      console.log(body);
    });
};
export const deleteLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "DELETE",
  };
  fetch(url + "laptops/" + laptop.id, config)
    .then((response) => response.json())
    .then((body) => {
      fnShowMessage();
      console.log(body);
    });
};
