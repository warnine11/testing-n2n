/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */const parselurl = {
    parseActiveUrlWithCombiner() {
      const url = window.location.hash.slice(1).toLowerCase();
      const splitedUrl = this._urlSplitter(url);
      return this._urlCombiner(splitedUrl);
    },
  
    parseActiveUrlWithoutCombiner() {
      const url = window.location.hash.slice(1).toLowerCase();
      return this._urlSplitter(url);
    },
  
    // eslint-disable-next-line no-underscore-dangle
    _urlSplitter(url) {
      const urlsSplits = url.split('/');
      return {
        resource: urlsSplits[1] || null,
        id: urlsSplits[2] || null,
        verb: urlsSplits[3] || null,
      };
    },
  
    _urlCombiner(splitedUrl) {
      return (
        (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
      );
    },
  };
  
  export default parselurl;