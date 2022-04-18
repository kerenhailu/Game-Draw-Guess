const BASIC_API = 'http://localhost:8000/users';

export const registerNewUser = async (user) => {
    
    return await fetch(`${BASIC_API}/register`, {
        method: 'POST', body: JSON.stringify(user), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json())
        .catch((err)=>{return err});
}
export const loginUser = async (user) => {
    return await fetch(`${BASIC_API}/login`, { 
        method: 'POST', body: JSON.stringify(user), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json())
        .catch((err)=>{return err});
}
export const GetAll = async()=>{
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
      try {
          return await fetch(`${BASIC_API}`,options)
          .then(res => res.json())
          .catch(err => {return err})
      } catch (error) {
          return error
      }
} 
export const GetUserById = async (id) => {
    let options ={
        headers: {
            "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const UpdateUser = async (id, user) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
        .then(response => response.json())
        .catch(reject => console.log("errr"))
    } catch (error) {
        return error
    }

}
export const DeleteUser = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}