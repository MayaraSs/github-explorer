import { useEffect, useState } from "react";
import { getReposByUser, getUserInfo } from "./hooks/useListUsers";
import { Container, Form, ProfileInfo } from "./styles";
import iconGitHUb from "../../assets/icon-github.png";

type User = {
  name: string;
  avatarUrl: string;
  login: string;
  //htmlUrl: string;
  reposUrl: string;
  repositories?: [];
};

const Search = ({ onSearch, onChange, value }: any) => {

  return (
    <>
      <div className='content'>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(value);
          }}
        >
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Pesquise por username'
          />
          <button type='submit'>Pesquisar</button>
        </Form>
      </div>
    </>
  );
};

const Profile = ({ userProfile }: any) => {
  const [repos, setRepos] = useState<[]>([]);
  

  const getRepositories = async () => {
    const data =  await getReposByUser(userProfile.reposUrl)
    return data
  }

  useEffect(() => {
    if(repos) { 
      getRepositories().then((data: []) => {
        setRepos(data)
    })}
  },[])

  return (
    <ProfileInfo>
      <img className='avatar' src={userProfile.avatarUrl} alt='profile' />
      <span>Usuário: {userProfile.login}</span>
      <span>Nome: {userProfile.name}</span>
      {repos &&
        repos.length > 0 &&
        repos.map((repo, i) => {
          return (<span key={i}>{repo['name']}</span>)
        })}
    </ProfileInfo>
  );
};

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState<User>();
  const [searchedName, setSearchName] = useState<string>('');

  const getUserInformationAction = async () => {
    console.log(" chamandooo....");
    const data = await getUserInfo(searchedName);
    console.log(data);
    setUserProfile({
      name: data.name,
      avatarUrl: data.avatar_url,
      login: data.login,
      reposUrl: data.repos_url,
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
