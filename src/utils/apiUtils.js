import axios from "axios"

const fetchAll = (resoruce, cb)=>{
    axios.get(`http://localhost:6565/${resoruce}`)
      .then((res) => {
        cb(null, res.data);
      })
      .catch((err) => {
        // console.log(err)
        cb(`Failed to find ${resoruce}, please try again`)
      })
}

const save = (resoruce, item, cb)=>{
  axios.post(`http://localhost:6565/${resoruce}`, item)
    .then((res) => {
      fetchAll(resoruce, cb);
    })
    .catch((err) => {
      // console.log(err)
      cb(`Failed to save ${resoruce}, please try again`);
    })
}


export {fetchAll, save}