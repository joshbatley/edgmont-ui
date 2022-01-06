import { overriderDefault } from './override-default';

let defaults = {
  padding: 'p-10',
  margin: 'm-10',
  width: 'w-10',
  height: 'h-10',
};


describe('overriderDefault', () => {
  it('should override the defaults if the pattern is matched', () => {
    let overrides = 'px-10 my-10 w-1/2 h-1/2';
    let results = overriderDefault(defaults, overrides);
    expect(results).toBe('px-10 my-10 w-1/2 h-1/2');
  });

  it('should return the defaults and the overrides if the patterns aren\'t matched', () => {
    let overrides = 'bg-red-500';
    let results = overriderDefault(defaults, overrides);
    expect(results).toBe(`${Object.values(defaults).join(' ')} ${overrides}`);
  });
});
