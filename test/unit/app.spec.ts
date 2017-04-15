import {App} from '../../src/app';

describe('the app', () => {
  it('has title', () => {
    expect(new App().title).not.toBeTruthy();
  });
});
