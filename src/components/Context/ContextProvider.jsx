
import { createContext,useState} from "react"

export const AppContext=createContext();


export const ContextProvider = ({children}) => {
    const[isAuth,setIsAuth]=useState(false);
    const[token,setToken]=useState();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleClick = () => {
    setIsModalVisible(true);
  
  };

    const userLogin=(token)=>{
       setIsAuth(true);
       setToken(token)
    }

    const userLogout=()=>{
        setIsAuth(false);
        setToken(null);
    }

  return (
   <AppContext.Provider value={{isModalVisible,setIsModalVisible,isAuth,userLogin,setIsAuth,userLogout,email,password,setEmail,setPassword,handleClick}} >
   {children}
   </AppContext.Provider>
  )
}

