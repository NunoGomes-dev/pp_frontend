export default function useModal(state, setState) {
  const close = () => {
    setState(false);
  };
  const open = () => {
    setState(true);
  };
  const toggle = () => {
    setState(!state);
  };

  return { close, open, toggle };
}
