import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';



export const AuthContext = createContext();

export const AuthProvider= ({children}) =>{
    const [user, setUser]= useState(null);

return( 

<AuthContext.Provider
    
    value={{
        
        user,
        setUser,
        
        login: async (email, password)=> {

            try{
                
              await  auth().signInWithEmailAndPassword(email,password)
              

            } catch(e){
               
                
                console.log(e);

                if ( user.email.length == 0 || user.password.length == 0 ) {
                    Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                        {text: 'Okay'}
                    ]);
                    return;
                }
            }
        },

        register: async(email, password)=> {
            
            try{
                await auth().createUserWithEmailAndPassword(email,password)
            
            } catch(e){

                console.log(e);
            }

        },

        logout: async ()=>{

            try {
                await auth().signOut();

            } catch(e){

                console.log(e);
            }
        }

        
    }}>
    {children}

</AuthContext.Provider>


    );
}