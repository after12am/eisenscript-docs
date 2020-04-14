export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=0&show=0';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};
