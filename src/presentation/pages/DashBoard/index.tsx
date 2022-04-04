import {  useState } from "react";
import {  getUserInfo } from "./hooks/useListUsers";
import { Container } from "./styles";
import { Search } from "./components/Search";
import { Profile } from "./components/ProfileInformation";


type User = {
  name: string;
  avatarUrl: string;
  login: string;
  htmlUrl: string;
  reposUrl: string;
  repositories?: [];
};


const Dashboard = () => {
  const [userProfile, setUserProfile] = useState<User>();
  const [searchedName, setSearchName] = useState<string>('');
  
  
  const getUserInformationAction = async () => {
    const data = await getUserInfo(searchedName);
    setUserProfile({
      name: data.name,
      avatarUrl: data.avatar_url,
      login: data.login,
      reposUrl: data.repos_url,
      htmlUrl: data.html_url
    });
  };

  
  return (
    <Container>
      <Search onSearch={getUserInformationAction} onChange={setSearchName} value={searchedName  } />
      {userProfile && <Profile userProfile={userProfile} />}
  
    </Container>
  );
};

export default Dashboard;
