import { header } from './sourceRepoInfo.js';
import getData from './getData.js';

const contributors = (source) => {
  getData(source.contributors_url, header).then((data) => data);
};

export default contributors;