import { Props, Key, Children } from './stepClass';

type Config<P> = { key?: Key } & P;
interface Options<S, P> {
  step: S;
  key: Key;
  props: Props<P>;
}

// TODU: use 'infer' derivation.
interface EemptyStep<P = {}> { }

class CriusNode<S extends EemptyStep<P>, P = {}>  {
  public step: S;
  public key: Key;
  public props: Props<P>;

  constructor({
    step,
    key,
    props
  }: Options<S, P>) {
    this.step = step;
    this.key = key;
    this.props = props;
  }
}

function createFlow<S extends EemptyStep<P>, P = {}>(
  step: S,
  config: Config<P>,
  ...children: Children<P>
): CriusNode<S, P> {
  const props: Props<P> = {
    children,
    ...config,
  };
  let key = '';
  if (typeof step === 'function') {
    if (step.prototype.isCriusStep) {
      key = step.name || step.prototype.constructor.name;
    } else {
      key = step.name || ( step.prototype ? step.prototype.constructor.name : 'anonymous' );
    }
  }
  key = config && config.key ? config.key : key;
  return new CriusNode({
    step,
    key,
    props
  });
}

export {
  createFlow,
  CriusNode,
}
