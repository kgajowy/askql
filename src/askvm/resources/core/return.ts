import { resource } from '../../lib/resource';
import { run } from '../../lib/run';
import { JSONable, lambda, string, Typed } from '../../lib/typed';

export const returnRes = resource<Typed<JSONable>>({
  type: lambda(string, string),
  async compute(options, code) {
    const result = await run(options, code.params![0]);
    (options as any).returnedValue = result; // TODO return directly from this function
    return result;
  },
});
