const github = require('./github');
const parseGithubUrl = require('./parseGithubUrl');

const fetchRequests = () => {
  return github.pullRequests.getAll({
    owner: parseGithubUrl.owner,
    repo: parseGithubUrl.repo
  });
};

module.exports = fetchRequests;
