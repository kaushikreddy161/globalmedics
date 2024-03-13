import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from '../authConfig';
import NavBar from "./NavBar.component";
import { UserProvider } from "../contexts/user.context";

export const NavigationBar = () => {
    const { instance, inProgress } = useMsal();
    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    // const handleLoginPopup = () => {
    //     instance
    //         .loginPopup({
    //             ...loginRequest,
    //             redirectUri: '/redirect.html',
    //         })
    //         .catch((error) => console.log(error));
    // };

    // const handleLoginRedirect = () => {
    //     instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    // };

    // const handleLogoutRedirect = () => {
    //     instance.logoutRedirect();
    // };

    // const handleLogoutPopup = () => {
    //     instance.logoutPopup({
    //         mainWindowRedirectUri: '/', // redirects the top level app after logout
    //     });
    // };

    // const handleProfileEdit = () => {
    //     if (inProgress === InteractionStatus.None) {
    //         instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
    //     }
    // };

    return (
        <>
            {/* <UserProvider> */}
                <NavBar />
            {/* </UserProvider>     */}
        
            {/* <Navbar bg="primary" variant="dark" className="navbarStyle">
               <AuthenticatedTemplate> */}
                    {/* <Nav.Link className="navbarButton" href="/">
                        Home
                    </Nav.Link> */}
                   {/* <Nav.Link className="navbarButton" href="/careManagerDetails">
                        Care Manager
                    </Nav.Link> */}
                    {}
                    {/* <Button variant="info" onClick={handleLoginRedirect} className="profileButton">
                            Login
                        </Button> */}

                    {/* <div className="collapse navbar-collapse justify-content-end"> */}
                        {/* <Button variant="info" onClick={handleProfileEdit} className="profileButton">
                            Edit Profile
                        </Button>  */}

                        {/* <DropdownButton
                            variant="warning"
                            drop="start"
                            title={activeAccount && activeAccount.username ? activeAccount.username : 'Logout'}
                        > */}
                            {/* <Dropdown.Item as="button" onClick={handleLogoutPopup}>
                                Sign out using Popup
                            </Dropdown.Item> */}
                            {/* <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                                Sign out
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="collapse navbar-collapse justify-content-end">
                        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In"> */}
                            {/* <Dropdown.Item as="button" onClick={handleLoginPopup}>
                                Sign in using Popup
                            </Dropdown.Item> */}
                            {/* <Dropdown.Item as="button" onClick={handleLoginRedirect}>
                                Sign in
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </UnauthenticatedTemplate>
            </Navbar> */}
        </>
    );
};
