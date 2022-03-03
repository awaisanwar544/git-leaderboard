import { header } from './sourceRepoInfo.js';
import getData from './getData.js';

const stargazers = (source) => getData(source.stargazers_url, header).then((data) => data);

export default stargazers;