import * as askjsx from '..';
import { askCode } from '../../askcode';
askjsx;

test('jsx', () => {
  const sum = <call name="sum" args={[4, 5]} />;
  expect(sum).toStrictEqual(
    askCode({
      name: 'call',
      params: [askCode({ name: 'get', params: ['sum'] }), 4, 5],
    })
  );
});
