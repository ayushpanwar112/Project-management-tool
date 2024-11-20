import axios from "axios";
import { createContext, ReactNode, FC, useState, useEffect} from "react";

// Define the Task interface based on your API response
export interface Task {
  _id: string;
  name: string;
  description: string;
  completed: boolean;
  date: Date;
  timeout: boolean;
  priority: string;
  progress:string;
}


interface ContextValue {
  Toggle: () => Promise<void>; 
  data: Task[];  
}

export const StoreContext = createContext<ContextValue | null>(null);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: FC<StoreContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<Task[]>([]); 

  // Function to fetch tasks and update state
  const Toggle = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks"); 
      setData(response.data.task || []); 
  
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(()=>{
           Toggle()
  },[data])
   
  const contextValue: ContextValue = {
    Toggle,
    data,

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
