export const Markdown = ({ children }) => {
  return <span>{children}</span>;
};

export default Markdown;
// https://github.com/remarkjs/react-markdown/issues/635 using mock since the other
// option is to downgrade the package to v6 which is bad option
