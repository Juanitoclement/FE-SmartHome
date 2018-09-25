import axios from "axios";

export function loadResponse() {
  return (dispatch) => {
    return axios.get("http://www.mocky.io/v2/5ba98f4b3100000f00c27694").then((response) => {
      dispatch(showName("hi iam" + response.data.info.name));
    })
  }
}

export function showName(name) {
  return{
    type: "User",
    name: name
  }


}