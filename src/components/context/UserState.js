//import  {Fetchdata } from '../../hook/getData';
import React,{useState,useEffect}from 'react'
import UserContext from './UserContext';
const initialValue={

            
            FullName: "",
            UserName: "",
            UserImage: "",
            Email: "",
            Contact: "",
            PhnNum: "",
            Address: "",
            District: ""
}
const UserState = (props) => {
  // const appURL = process.env.REACT_APP_URL;
  // const [originalList, setOriginalList] = useState(null);
  // const [userList, setUserList] = useState([]);
    const [formValues, setFormValues] = useState(initialValue);
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
  //   useEffect(()=>{
  //     userLst()
  //   })

  //   const userLst = () => {
  //     const params = 
  //       {
          
  //         UserID: 1158,
  //         UserName: "huncha",
  //         Password: "huncha",
  //          Source: "D",
  //           Device: "A",
  //          NotToken: "eee",
  //         FetchURL: `${appURL}login`,
  //         Type: "POST"
  //       }
        
      
  
  //     Fetchdata(params).then((resp) => {
  //       console.log(resp)
  //       if (resp.StatusCode === 200) {
  //         const postResult = resp.Values ? resp.Values : "";
  //         setUserList(postResult);
  //         setOriginalList(postResult);
  //       } else {
  //         setUserList([]);
  //         setOriginalList([]);
  //       }
  //     });
  //   }
  //   const editData = () => {
  //     const dataForm = {
  //         UserID: "1",
  //         Flag: "U",
  //         TestimonialID: "1",
  //         FullName: formValues.fullName,
  //         Position: formValues.position,
  //         Email: formValues.email,
  //         UserImage: image ? image.split(",")[1] : "",
  //         ComName: formValues.comName,
  //         Comment: formValues.comment,
  //         AuthCode: "r1d3r",
  //         FetchURL: `${appURL}admin/testimonial`,
  //         Type: "POST",
  //       }
      
  
  //     Fetchdata(dataForm).then((res) => {
      
  //       if (res.StatusCode === 200) {
  //         setFormValues(initialValue);
  //         // setAllow(false);
  //         // setVerified(false);
  //         // setIsUploaded(false);
  //         // setImage("");
  //         // userLst();
         
  //     //     toast.success(res.Message, {
  //     //       style: {
  //     //         color: "green",
  //     //         fontSize: "13px",
  //     //       },
  //     //       theme: "light",
  //     //     });
  //     //   } else {
  //     //     toast.error("Error: " + res.Message, {
  //     //       style: {
  //     //         color: "red",
  //     //         fontSize: "13px",
  //     //       },
  //     //       theme: "light",
  //     //     });
  //     //   }
  //     // });
  
  //   }
  // })
  return (
    <UserContext.Provider value={{formValues,setFormValues,userName,setUserName,password,setPassword}}>
{props.children}
    </UserContext.Provider>
  )
}

export default UserState;
