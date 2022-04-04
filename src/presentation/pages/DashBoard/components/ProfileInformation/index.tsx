import { useEffect, useState } from "react";
import { getReposByUser } from "../../hooks/useListUsers";
import { ProfileInfo } from "./styles";
import iconGitHUb from "../../../../../assets/icon-github.png";
import { Pagination } from "../Pagination";

export const Profile = ({ userProfile }: any) => {
  const [repos, setRepos] = useState<[]>([]);
  const [page, setPage] = useState(1);

  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  const getRepositories = async () => {
    const data = await getReposByUser(userProfile.reposUrl, page, totalPages);
    return data;
  };

  useEffect(() => {
    if (repos) {
      getRepositories().then((data: []) => {
        setRepos(data);
      });
    }
  }, [page]);

  return (
    <ProfileInfo>
      <div className='content-profile'>
        <img className='avatar' src={userProfile.avatarUrl} alt='profile' />
        <span>UserName: {userProfile.login}</span>
        <span>Nome: {userProfile.name}</span>
        <a href={userProfile.htmlUrl}>
          <img src={iconGitHUb} alt='github' className='icon' />
        </a>
      </div>
      {repos &&
        repos.length > 0 &&
        repos.map((repo, indexArray) => {
          const repoPositionPage = indexArray + 1;
          return (
            <div key={indexArray}>
              <span key={indexArray}>
                {repoPositionPage} - {repo["name"]}
              </span>
            </div>
          );
        })}
      <Pagination
        currentPage={page}
        hasNextPage={repos.length < totalPages}
        handlePagination={handlePages}
      />
    </ProfileInfo>
  );
};
