import { useEffect, useState } from "react";
import { getReposByUser } from "../../hooks/useListUsers";
import { ProfileInfo } from "./styles";
import iconGitHUb from "../../../../../assets/icon-github.png";


export const Profile = ({ userProfile }: any) => {
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
        <div className="content-profile">
  
        <img className='avatar' src={userProfile.avatarUrl} alt='profile' />
        <span>Usuário: {userProfile.login}</span>
        <span>Nome: {userProfile.name}</span>
        <a href={userProfile.htmlUrl}>
          <img src={iconGitHUb} alt="github" className="icon"/>
        </a>
        
        </div>
        {repos &&
          repos.length > 0 &&
          repos.map((repo, i) => {
            return (
            <div>
              <span key={i}>{i +1} - {repo['name']}</span>
            </div>
            )
          })}
      </ProfileInfo>
    );
  };