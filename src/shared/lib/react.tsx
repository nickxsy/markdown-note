import {
  Children,
  type ReactNode,
  createElement,
  isValidElement,
  startTransition,
  useEffect,
  useState
} from 'react';

export function useAppearanceDelay(
  show?: boolean,
  options = {} as {
    defaultValue?: boolean;
    appearenceDelay?: number;
    minDisplay?: number;
  }
) {
  const {
    minDisplay = 500,
    defaultValue = false,
    appearenceDelay = 500
  } = options;

  const [delayedShow, setDelayedShow] = useState(defaultValue);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(true));
      }, appearenceDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(false));
      }, minDisplay);
      return () => clearTimeout(timer);
    }
  }, [appearenceDelay, show, minDisplay]);

  return delayedShow;
}

export function ComposeChildren({ children }: { children: ReactNode }) {
  const array = Children.toArray(children);
  const last = array.pop();
  return (
    <>
      {array.reduceRight(
        (child, element) =>
          isValidElement(element)
            ? createElement(element.type, element.props, child)
            : child,
        last
      )}
    </>
  );
}
