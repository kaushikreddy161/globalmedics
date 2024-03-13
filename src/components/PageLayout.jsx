import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import React, { useContext, useState, useEffect } from "react";
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from '../authConfig';
import { NavigationBar } from './NavigationBar';
import { UserContext } from "../contexts/user.context";


export const PageLayout = (props) => {
    const { instance, inProgress } = useMsal();
    const { user, custFunctionLogin } = useContext(UserContext);
    let activeAccount;
 
    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    console.log("props:", props);
    
    useEffect(() => {
        console.log("PageLayout line 20");
        handleLoginRedirect();
        if(props.idTokenClaims) {
            console.log("props pagelayout:", props.idTokenClaims.sub);    
            loadUser();
        }        
       }, [props.idTokenClaims]);

     const loadUser = async () => {
        //console.log("props line 26: ",props.idTokenClaims.sub);
        //const userx = await custFunctionLogin("d0957f1e-5d20-4d70-91da-4518c6ec809d")
        const userx = await custFunctionLogin(props.idTokenClaims.sub)
        if(userx)
         {
             console.log("success");
         }
         else
         {
             console.log("failed");
         }
    }
    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
};

    return (
        <>
            <NavigationBar /> 

            {/* <br />
            <h5>
                <center>Welcome to the GlobalMedics</center>
            </h5>
            <br /> */}
            {props.children}
            <br />
            {/* <AuthenticatedTemplate>
                <footer>
                    <center>
                        How did we do?
                        <a
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {' '}
                            Share your experience!
                        </a>
                    </center>
                </footer>
            </AuthenticatedTemplate> */}
        </>
    );
};
