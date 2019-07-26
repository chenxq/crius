import {
  Step as BaseStep,
  plugins
} from 'crius-test';
import logger from 'crius-logger';


@plugins([logger({ path: 'packages/crius-example/dist/log' })])
export default class Step<P = {}, C = {}> extends BaseStep<P, C> {} 