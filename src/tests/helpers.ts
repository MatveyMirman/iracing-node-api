import nock from 'nock';
export const mockNockHelper = () => {
  nock.disableNetConnect();
  return nock('https://members-ng.iracing.com');
};
